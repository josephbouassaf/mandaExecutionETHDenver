import { web3,getUserAccount } from "./web3";
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

const getIntuContract = async () => {
    //connect to INTU contract
    const INTU_ADDRESS = 0x6c92E8018cF1284986B95A26d5666CA2bB8Aa9D7;    
    //get abi
    const INTUContractABI = await fetch('https://api.etherscan.io/api?module=contract&action=getabi&address=0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359'); 
    // get contract
    const INTUContract = await new web3.eth.Contract(CONTRACT_ADDRESS, abi);
    return INTUContract; 
}

const createVault = async (participants) => { // redo 
    const INTUContract = await getIntuContract(); 
    await INTUContract.methods.create(participants, "MyFirstVaultName", [6,6,6], [participantsPublicKeysForVault], [2,2,2], "random").send(); 
}

const getVaultInfo = async () => {
    const INTUContract = await getIntuContract(); 
    const userAccount = await getUserAccount(); 
    const userVaults = await INTUContract.methods.getUserVaults(userAccount).call(); 
    return userVaults[userVaults.length-1]; // send the most recent
}

const signVaultEncryptionMessage = async (vaultId) => {
    const INTUContract = await getIntuContract();
    const signer = web3.getSigner();  
    let vaultInfo = await INTUContract.methods.getVaultInfo(vaultId).call();
    let encryptionMessage = vaultInfo.data[6];
    let signature = await signer.signMessage(encryptionMessage);
    return signature; 
}

const getEncryptionKey = async (vaultId) => { // 1 for every user 
     // This endpoint needs to be hit by each user involved with a vault during the vaults registration phase
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
     INTUContract.methods.registerUser(vaultId, userParisKey).send(); 
}

const generateMPCEOA = async (vaultId,participants) => { // 2
    const INTUContract = await getIntuContract(); 
    let vaultInfo = await INTUContract.methods.getVaultInfo(vaultId).call();
    let t = Math.ceil((vaultUsers.length * vault.transactionThreshold) / 100)
    if (n.length === t) { t = n.length - 1 }
    let encryptionkeys = []; 
    for (let i = 0; i < vault.vaultUsers.length; i++) {
      await INTUContract.userPublicKeyForEncryption(vaultId, participants[i])
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

const formTransaction = async (vaultId,to) => {
    // get the intu contract
    const INTUContract = getIntuContract(); 
    // get the vaultId
    let vaultInfo = INTUContract.getVaultInfo(vaultId); 
    let nonce = await web3.eth.getTransactionCount(vaultInfo.data[3]);
    let noncePlusTx = nonce + vaultInfo.txData.length
    let userPrivateKey = await INTUContract.methods.userEncryptedPrivateForVaults(vaultId, state.signerAddress).call();
    let signature = await INTUContract.methods.signMessage(vaultInfo.vaultEncryptionMessage).send();
    let chainId = 11155111; 
    let value = ethers.utils.parseEther(String(0))._hex;
    let finalValue = parseInt(value).toString();
    let data = {
        nonce: noncePlusTx,
        toaddress: to,
        value:  finalValue,
        data: DATAFROMYOURFORM, // todo
        chainid: chainId
    } 
    const result = await fetch('https://0feaswcvhk.execute-api.us-west-1.amazonaws.com/alpha/formtransaction',{
        method: 'POST',
        headers: {
            // add API key
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({ data})
     }); 

     return result; 
}

const signTransaction = async (vaultId) => {
    const INTUContract = await getIntuContract(); 
    let vaultInfo = await INTUContract.getVaultInfo(vaultId); 
    const signer = web3.getSigner(); 
    let userPrivateKey = await INTUContract.methods.userEncryptedPrivateForVaults(vaultId, signer).call();
    let signature = await INTUContract.methods.signMessage(vaultInfo.vaultEncryptionMessage).send();
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

    const signedTxForStorage = await fetch('https://0feaswcvhk.execute-api.us-west-1.amazonaws.com/alpha/signtransaction',{
        method: 'POST',
        headers: {
            // add API key
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({ data})
     }); 

    let txInfo = INTUContract.methods.getVaultTransactions(vaultId).call(); 
    let txid = txInfo[txInfo.length-1]// verify;  
    
    await INTUContract.methods.userConfirmTx(txid, signedTxForStorage, vaultId).send(); 
}

const combineSignatures = async (vaultId) => {
    const INTUContract = await getIntuContract(); 
    let vaultInfo = await INTUContract.getVaultInfo(vaultId)
    let userPrivateKey = await INTUContract.methods.userEncryptedPrivateForVaults(vaultId, state.signerAddress).call();
    let signature = INTUContract.methods.signMessage(vaultInfo.vaultEncryptionMessage).send();
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