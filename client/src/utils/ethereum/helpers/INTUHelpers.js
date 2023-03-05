import { getSigner } from "../web3";
import {ethers} from 'ethers';
import { web3 } from "../web3";
import { INTUContractABI } from "../abi/INTUContractABI";
/**************** START HELPERS ******************/
const getIntuContract = () => {
    //contract address
    const CONTRACT_ADDRESS = '0x6c92E8018cF1284986B95A26d5666CA2bB8Aa9D7';    
    //signer
    const signer = getSigner();
    // contract instance
    const INTUContract =  new ethers.Contract(CONTRACT_ADDRESS, INTUContractABI,signer);

    return INTUContract; 
}

const getVaultsInfo = async (vaultIndex) => {
    const CONTRACT_ADDRESS = '0x6c92E8018cF1284986B95A26d5666CA2bB8Aa9D7'; 
    const contract = new web3.eth.Contract(INTUContractABI,CONTRACT_ADDRESS); 
    let signer = getSigner(); 
    let signerAddress = await signer.getAddress(); 
    const alluservaults = []; 
    console.log(vaultIndex); 
    let temp = await contract.methods.userVaults('0x4f68F3b5fb23cCE9A4A695b9171254f513bf824f',vaultIndex.toString()).call();
    alluservaults.push(temp);

    let finalVaults; 
    if (alluservaults.length > 0) {
     for (let i = 0; i < alluservaults.length; i++) {
     const data = await contract.methods.getVaultInfo(alluservaults[i]).call();
     const registered = await contract.methods.userIsRegistered(alluservaults[i], signerAddress).call();
     const userPrivateKey = await contract.methods.userEncryptedShareForVaults(alluservaults[i], signerAddress).call();
     const tempArray = {
                        vaultName: data[0],
                        vaultUsers: data[1],
                        vaultCreated: data[2][1],
                        //ethers.utils.computeAddress(data[3]),
                        //vaultAddress: "0x12354",
                        vaultAddress: "", // data[3] is always null
                        vaultTxThreshold: data[4][0],
                        vaultAdminThreshold: data[4][1],
                        vaultRotationThreshold: data[4][2],
                        vaultRegisteredUsers: data[5],
                        vaultEncryptionMessage: data[6],
                        userRegistered: registered,
                        vaultId: data[2][0],
                        vaultStatus: data[5] >= data[1].length ? "ready" : "registration",
                        txData: [],
                        rotateData: [],
                        adminChangeData: [],
                        vaultNfts: [],
                        encryptedShare: userPrivateKey,
                    };
    let txArray = await contract.methods.getVaultTransactions(Number(tempArray.vaultId)).call();
    txArray = txArray.map((tx) => Number(tx));
    console.log(txArray);
                    for (let j = 0; j < txArray.length; j++) {
                        let txId = txArray[j];
                        const txInfo = await contract.methods.getTransactionInfo(txId).call();
                        console.warn(txInfo);
                        const txdetails = ethers.utils.parseTransaction(txInfo);
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
                            vaultId:tempArray.vaultId,
                            transactionThreshold: tempArray.vaultTxThreshold,
                            totalParticipants: tempArray.vaultUsers.length,
                            txId: txArray[j], // use thst to confirm tx
                            emptyTxData: txInfo[4],
                        };
                        tempArray.txData.push(txDataRetrieved);
                    }
     const getAdminChangeData = await contract.methods.getThresholdStatusForVault(tempArray.vaultId).call();
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
        finalVaults = (tempArray);
        console.log(tempArray); 
        localStorage.setItem('currentVault',finalVaults); 
    } 
}
return finalVaults;
}

const signVaultEncryptionMessage = async (encryptionMessage) => {
    const INTUContract = getIntuContract();
    const signer = getSigner();  
    let signature = await signer.signMessage(encryptionMessage);
    return signature; 
}

const getVaultByIndex = async (index) => {
    const vaults = await getVaultsInfo(index); 
    return vaults;
}

/**************** END HELPERS ******************/

/**************** Utility functions ******************/

export {getIntuContract, getVaultByIndex, signVaultEncryptionMessage}