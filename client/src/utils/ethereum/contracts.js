import { web3,getUserAccount, getSigner, getProvider } from "./web3";
import {ethers } from 'ethers'; 
const abi = [
    {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "symbol",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "initialSupply",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]; 

// ask about create conundrum
// ask how to bind deoa to a wallet
// ask how to send a transaction

const getIntuContract = async () => {
    //connect to INTU contract
    const INTU_ADDRESS = 0x6c92E8018cF1284986B95A26d5666CA2bB8Aa9D7;    
    //get abi
    const INTUContractABI = await fetch('https://api.etherscan.io/api?module=contract&action=getabi&address=0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359'); 
    // get contract
    const INTUContract = await new ethers.Contract(CONTRACT_ADDRESS, abi, getSigner());
    return INTUContract; 
}

const createVault = async (participants,vaultName) => { // ask how to get public keys if to fenerate them we need vault
    const INTUContract = await getIntuContract(); 
    await INTUContract.create(participants, vaultName, [6,6,6], [participantsPublicKeysForVault], [2,2,2], "random"); 
}

const getVaultsInfo = async () => {
        const INTUContract = await getIntuContract(); 
        const alluservaults = await INTUContract.getUserVaults(getSigner());
        let finalVaults = []; 
        let signer = getSigner();

        if (alluservaults.length > 0) {
         for (let i = 0; i < alluservaults; i++) {
         const data = await INTUContract.getVaultInfo(alluservaults[i], signer);
         const registered = await INTUContract.userIsRegistered(alluservaults[i], signerAddress, signer);
         const userPrivateKey = await INTUContract.userEncryptedPrivateForVaults(alluservaults[i], signerAddress, signer);
         
         const tempArray = {
                            vaultName: data[0],
                            vaultUsers: data[1],
                            vaultCreated: data[2][1].toNumber(),
                            //ethers.utils.computeAddress(data[3]),
                            //vaultAddress: "0x12354",
                            vaultAddress: data[3].length > 4 ? data[3] : "",
                            vaultTxThreshold: data[4][0].toNumber(),
                            vaultAdminThreshold: data[4][1].toNumber(),
                            vaultRotationThreshold: data[4][2].toNumber(),
                            vaultRegisteredUsers: data[5].toNumber(),
                            vaultEncryptionMessage: data[6],
                            vaultEthBalance: balanceInEth,
                            userRegistered: registered,
                            vaultId: data[2][0],
                            vaultStatus: data[5].toNumber() >= data[1].length ? "ready" : "registration",
                            txData: [],
                            rotateData: [],
                            adminChangeData: [],
                            vaultNfts: [],
                            encryptedShare: userPrivateKey,
                        };
         const txArray = (await INTUContract.getVaultTransactions(vaultId, state.signer)).map((tx) => tx.toNumber());
                        for (let j = 0; j < txArray.length; j++) {
                            let txId = txArray[j];
                            const txInfo = await INTUContract.getTransactionInfo(txId, signer);
                            console.warn(txInfo);
                            const txdetails = ethers.utils.parseTransaction("0xe40380809470997970c51812dc3a010c7d01b50e0d17dc79c887038d7ea4c6800080018080");
                            let txDataRetrieved = {
                                chainId: txdetails.chainId,
                                data: txdetails.data,
                                gasLimit: txdetails.gasLimit ? Number(txdetails.gasLimit.toString()) : "",
                                gasPrice: txdetails.gasPrice ? Number(txdetails.gasPrice.toString()) : "",
                                maxFeePerGas: txdetails.maxFeePerGas ? Number(txdetails.maxFeePerGas.toString()) : "",
                                maxPriorityFeePerGas: txdetails.maxPriorityFeePerGas ? Number(txdetails.maxPriorityFeePerGas.toString()) : "",
                                to: txdetails.to,
                                type: txdetails.type,
                                value: ethers.utils.formatEther(txdetails.value.toString()),
                                transactionIndex: txArray[i],
                                transactionHash: txInfo[0],
                                userTxSubmission: txInfo[1],
                                txApprovedCount: Number(txInfo[2]),
                                txSent: txInfo[3],
                                vaultId: state.myVaults[i],
                                transactionThreshold: tempArray.vaultTxThreshold,
                                totalParticipants: tempArray.vaultUsers.length,
                                txId: txArray[j],
                                emptyTxData: txInfo[4],
                            };
                            tempArray.txData.push(txDataRetrieved);
                        }
         const getAdminChangeData = await INTUContract.getThresholdStatusForVault(vaultId, signer);
                        if (getAdminChangeData) {
                            let adminNamedArray = {
                                newName: getAdminChangeData[0],
                                newThreshold: getAdminChangeData[1],
                                thresholdType: getAdminChangeData[2],
                                readyToChangeThreshold: getAdminChangeData[3][0],
                                readyToChangeName: getAdminChangeData[3][1],
                                userVotedThreshold: getAdminChangeData[4][0],
                                userVotedName: getAdminChangeData[4][1],
                                votesForThreshold: getAdminChangeData[5][0],
                                votesForName: getAdminChangeData[5][1],
                                adminThreshold: getAdminChangeData[5][2],
                            };
                            tempArray.adminChangeData.push(adminNamedArray);
                        }
                        finalVaults.push(tempArray);
        } 
        // finalVaults has complete vault data for a user in an array, set it in your state.
    }
    return finalVaults;
}


const getVaultByName = async (name) => {
    const vaults = async getVaultsInfo(); 
    for(let i =0; i<vaults.length;i++) {
        if(vaults[i].vaultName === name)
            return vaults[i]; 
    }
}

const signVaultEncryptionMessage = async (vaultName) => {
    const INTUContract = await getIntuContract();
    const signer = getSigner();  
    let vault = await getVaultByName(vaultName);
    let encryptionMessage = vault.vaultEncryptionMessage;
    let signature = await signer.signMessage(encryptionMessage);
    return signature; 
}

const getEncryptionKey = async (vaultId) => { // 1 for every user 
     // This endpoint needs to be hit by each user involved with a vault during the vaults registration phase
    const signature = await signVaultEncryptionMessage(vaultId); 
    const userParisKey = await fetch('https://0feaswcvhk.execute-api.us-west-1.amazonaws.com/alpha/getencryptionkey',{
        method: 'POST',
        headers: {
            // add API key
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({ "signature": signature })
     }); 
    const INTUContract = await getIntuContract(); 
    //register user
    await INTUContract.registerUser(vaultId, userParisKey); 
}

const generateMPCEOA = async (vaultName,participants) => { // 2
    const INTUContract = await getIntuContract(); 
    let vault = await getVaultByName(vaultName);
    let n = vault.vaultUsers; 
    let t = Math.ceil((n.length * vault.vaultTxThreshold) / 100)
    if (n.length === t) { t = n.length - 1 }
    let encryptionkeys = []; 
    for (let i = 0; i < vault.vaultUsers.length; i++) {
      await INTUContract.userPublicKeyForEncryption(vault.vaultId, participants[i])
        .then(res => {
          encryptionkeys.push(res)
        })
    }
    let dataToSend = JSON.stringify({ "participants": n, "threshold": t, "encryptionkeys": encryptionkeys })
    fetch('http://localhost:8080/keygen', {
      headers: {
        'Content-Type': 'text/plain'
      },
      mode: 'cors',
      referrerPolicy: 'no-referrer',
      cache: 'no-cache',
      method: 'POST',
      body: dataToSend
      //add api key
    })
      .then(res => res.json())
      .then(res => {
        let encryptedShares = res.keys.replace('[', '');
        encryptedShares = encryptedShares.replace(']', '');
        encryptedShares = encryptedShares.split(' ');
        masterPublicKey = res.eoa;
        INTUContract.userCompleteVault(vaultId, encryptedShares, masterPublicKey)
      })
}
// ask how to do

const formTransaction = async (vaultName,to) => {
    // get the intu contract
    const INTUContract = await getIntuContract(); 
    // get provider
    const provider = getProvider(); 
    const signer = getSigner(); 
    // get the vaultId
    let vault= await getVaultByName(vaultName); 
    let nonce = provider.getTransactionCount(vault.vaultAddress);
    let noncePlusTx = nonce + vault.txData.length;
    //let userPrivateKey = await INTUContract.userEncryptedPrivateForVaults(vault.vaultId, signer);
    //let signature = await INTUContract.signMessage(vault.vaultEncryptionMessage); // what is this
    let value = ethers.utils.parseEther(String(0))._hex;
    let finalValue = parseInt(value).toString();
    let chainId = 11155111;
    let data = {
    nonce: noncePlusTx,
    toaddress: to,
    value: finalValue,
    data: "", // check this
    chainid: chainId
    }
    let body: JSON.stringify({ data })
    const result = await fetch('https://0feaswcvhk.execute-api.us-west-1.amazonaws.com/alpha/formtransaction',{
        method: 'POST',
        headers: {
            // add API key
            "Content-Type": 'application/json'
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


export {abi, getIntuContract,signVaultEncryptionMessage,getEncryptionKey,generateMPCEOA}; 