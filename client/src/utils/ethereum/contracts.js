import { 
    web3,
    getUserAccount, 
    getSigner, 
    getProvider 
} from "./web3";
import {ethers } from 'ethers'; 
import { INTUContractABI } from "./abi/INTUContractABI";
import { 
    getVaultByIndex, 
    getIntuContract, 
    signVaultEncryptionMessage 
} from "./helpers/INTUHelpers";

/**************** Utility functions ******************/
const registerUserInVault = async (userParisKey,vaultCount) => {
    // get the contract
    const INTUContract = getIntuContract();
    // get the vault
    const vault = await getVaultByIndex(vaultCount);
    // register the user
    await INTUContract.register(vault.vaultId, userParisKey);
    console.log('user registered'); 
}

const getEncryptionKey = async (signature) => { // 1 for every user 
    // This endpoint needs to be hit by each user involved with a vault during the vaults registration phase
    const userParisKey = await fetch('https://phk18up9uk.execute-api.us-west-1.amazonaws.com/beta/getencryptionkey',{
        method: 'POST',
        cache: 'no-cache',
        mode: 'cors',
        headers: {
           'X-API-Key': 'mggyHgqfVu6XrdN3hAhpm9nCV7NQ8gjQ5UrkOZ6X',
           'Content-Type': 'application/json'
       },
       body: JSON.stringify({ "signature": signature })
    }).then(response => response.json())
    .then(data => data['userParisKey'])
    console.log(userParisKey); 
    return userParisKey; 
}
// 1) call create vault 
const createVault = async (participants,encryptionMessage,vaultName,vaultCount) => { 
    const INTUContract = getIntuContract(); 
    // sign the message by the signer
    const signature = await signVaultEncryptionMessage(encryptionMessage);
    // get encryption key
    const userParisKey = await getEncryptionKey(signature); 
    // create the vault
    await INTUContract.create(participants, vaultName, [99,99,99], userParisKey, encryptionMessage); 
    // register the caller
    await registerUserInVault(userParisKey,vaultCount);
}
// 2) for every participant, add them to the vault (= generate pkey + register in vault)
const addUserToVault = async (vaultIndex) => {
    // get the vault 
    let vault=  await getVaultByIndex(vaultIndex);
    console.log(vault); 
    // sign the encryption message
    const signature = await signVaultEncryptionMessage(vault.vaultEncryptionMessage); 
    // get encryption key
    const userParisKey = await getEncryptionKey(signature); 
    console.log(userParisKey);
    // register user in vault
    await registerUserInVault(userParisKey, vaultIndex); 
} 
// 3) generate the EOA, manda is the caller
const generateMPCEOA = async (vaultIndex,participants) => { // 2 run that 
    const CONTRACT_ADDRESS = '0x6c92E8018cF1284986B95A26d5666CA2bB8Aa9D7'; 
    const INTUContract = new web3.eth.Contract(INTUContractABI,CONTRACT_ADDRESS); 
    let vault = await getVaultByIndex(vaultIndex);
    let vaultId = vault.vaultId;
    console.log(vaultId); 
    let n = vault.vaultUsers; 
    let t = Math.ceil((n.length * vault.vaultTxThreshold) / 100)
    if (n.length === t) { t = n.length - 1 }
    let encryptionkeys = []; 
    for (let i = 0; i < vault.vaultUsers.length; i++) {
      let key = await INTUContract.methods.userPublicKeyForEncryption(vaultId, participants[i]).call();
      encryptionkeys.push(key); 
    }
    let encryptedShares; 
    let masterPublicKey; 
    await fetch('https://phk18up9uk.execute-api.us-west-1.amazonaws.com/beta/keygen', {
        method: 'POST',
        cache: 'no-cache',
        mode: 'cors',
        headers: {
           "Content-Type": 'application/json',
           "X-API-Key": "mggyHgqfVu6XrdN3hAhpm9nCV7NQ8gjQ5UrkOZ6X"
       },
       body: JSON.stringify({ "participants": n, "threshold": t, "encryptionkeys": encryptionkeys })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res); 
        encryptedShares = res.keys.replace('[', '');
        encryptedShares = encryptedShares.replace(']', '');
        encryptedShares = encryptedShares.split(' ');
        masterPublicKey = res.eoa;
        console.log('the eoa address is '+res.eoa); 
      });
      await  INTUContract.userCompleteVault(vaultId, encryptedShares, masterPublicKey);
      return masterPublicKey; 
}

const formTransaction = async (vaultName,to) => {
    // get the contract
    if(INTUContract === undefined)
        INTUContract = await getIntuContract();
    // get provider
    const provider = getProvider();  
    // get the vaultId
    let vault= await getVaultByName(vaultName); 
    let nonce = provider.getTransactionCount(vault.vaultAddress);
    let noncePlusTx = nonce + vault.txData.length;
    //let userPrivateKey = await INTUContract.userEncryptedPrivateForVaults(vault.vaultId, signer);
    //let signature = await INTUContract.signMessage(vault.vaultEncryptionMessage); // what is this
    let value = ethers.utils.parseEther(String(value))._hex;
    let finalValue = parseInt(value).toString();
    let chainId = 11155111;
    let data = {
    nonce: noncePlusTx,
    toaddress: to,
    value: finalValue,
    //data: "", // check this
    chainid: chainId
    }
    const result = await fetch('https://phk18up9uk.execute-api.us-west-1.amazonaws.com/beta/formtransaction',{
        method: 'POST',
        cache: 'no-cache',
        mode: 'cors',
        headers: {
           'X-API-Key': 'mggyHgqfVu6XrdN3hAhpm9nCV7NQ8gjQ5UrkOZ6X',
           'Content-Type': 'application/json'
       },
        body: JSON.stringify({ data})
     }); 

    await INTUContract.proposeTransaction(abiEncodedTx, emptyTx, vault.vaultId); // how do I get first two args?
}

const signTransaction = async (vaultName) => { // where is the formed transaction grabbed? in form we don't post anything on chain
    const INTUContract = await getIntuContract(); 
    let vault = await getVaultByName(vaultName); 
    const signer = web3.getSigner(); 
    let userPrivateKey = await INTUContract.userEncryptedPrivateForVaults(vault.vaultId, signer); 
    let signature = await INTUContract.signMessage(vault.vaultEncryptionMessage); // what is this?
    let signedTransactions = vault.txData[1];
    let originalTransaction = vault.txData[4];
    let chainId = 11155111; 
    let data = {
      userconfig: userPrivateKey,
      signature: signature,
      signedtransactions: signedTransactions ,
      originaltransaction: originalTransaction,
      chainid: chainId 
    }

    const signedTxForStorage = await fetch('https://0feaswcvhk.execute-api.us-west-1.amazonaws.com/alpha/signtransaction',{
        method: 'POST',
        headers: {
            // add API key
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({ data})
     }); 

    let txInfo = await INTUContract.getVaultTransactions(vault.vaultId); 
    let txid = txInfo[txInfo.length-1]// verify;  
    
    await INTUContract.userConfirmTx(txid, signedTxForStorage, vault.vaultId); 
}

const combineSignatures = async (vaultId) => {
    const INTUContract = await getIntuContract(); 
    let vaultInfo = await INTUContract.getVaultInfo(vaultId)
    let userPrivateKey = await INTUContract.userEncryptedPrivateForVaults(vaultId, state.signerAddress);
    let signature = INTUContract.signMessage(vaultInfo.vaultEncryptionMessage);
    let signedTransactions = vaultInfo.txData[1];
    let originalTransaction = vaultInfo.txData[4];
    let chainId = 11155111; 
    let data = {
    userconfig: userPrivateKey,
    signature: signature,
    signedtransactions: signedTransactions ,
    originaltransaction: originalTransaction,
    chainid: chainId 
    }
    const signedTxForStorage = await fetch('https://0feaswcvhk.execute-api.us-west-1.amazonaws.com/alpha/combinesignatures',{
        method: 'POST',
        headers: {
            // add API key
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({ data})
     });
}


export {getEncryptionKey,generateMPCEOA,createVault, addUserToVault}; 