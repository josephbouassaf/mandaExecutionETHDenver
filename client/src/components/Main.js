import { useEffect, useState } from "react";
import { web3 } from "../utils/ethereum/web3";
import { abi, createVault, addUserToVault, generateMPCEOA, getVaultsInfo, getIntuContract } from "../utils/ethereum/contracts";

const Main = () => {

    const [domLoaded, setDomLoaded] = useState(false);
    const [signatories, setSignatories] = useState(0); 
    const [vaultCount,setVaultCount] = useState(9);

     // manda,fei, rari
    const participants = ['0x4f68F3b5fb23cCE9A4A695b9171254f513bf824f','0x69300E49293e17bCd98f2702257638672568A7A4','0x45863fD8E28562940CD22D7239799ecfDf1D59Bc']; 

    const getTokenSymbol = async (address) => {
        const contractInstance = new web3.eth.Contract(abi,address); 
        const symbol = await contractInstance.methods.symbol().call(); 
        return symbol; 
    }
    const setupVault = () => {
        // TODO
            const encryptionMessage = "random"; 
            const vName = "FeiRari-"+ Math.ceil(100000*Math.random());
            console.log(vName);
            console.log(vaultCount); 
            createVault(participants,encryptionMessage,vName,vaultCount)
            .then(result => {
                console.log('vault succesfully created'); 
                setVaultCount(vaultCount+1);
            });  
            // create intu wallet
                // get the symbols of the tokens
                // save symbol, deal nature, intu wallet address in localstorage
                // add a row with the above info in the table with nested table for acitivty
    }

    const addUser = () => {
        addUserToVault(vaultCount).then(result => {
            console.log('user added to vault')
        });
    }

    const generateWallet = () => { // 0x86822e4f7dCDCc59b9E02Ef46EEa3D365ACcb71b
        generateMPCEOA(vaultCount,participants)
        .then(result => {
            console.log(result); 
            const walletAddress = document.getElementById("tableData-1");
            const dealNature = document.getElementById("tableData-2");
            const p1 = document.getElementById("tableData-3");
            const p2 = document.getElementById("tableData-4"); 
            walletAddress.innerHTML = '0x86822e4f7dCDCc59b9E02Ef46EEa3D365ACcb71b'; 
            dealNature.innerHTML = "ACQUISITION"; 
            p1.innerHTML = 'FEI'; 
            p2.innerHTML = 'RARI'; 
        });
    }

    const endActivity = () => {
        // remove manda rom intu wallet signatory

    }
    useEffect(() => {
        setDomLoaded(true);
    }); 

    return (
    <>
    {domLoaded && <div id="container">
        <section>
            <h1>Manda Execution Tool: Execute Merger & Acquisition Securely</h1>
        </section>
        <section>
        <h4>Generate a secure MPC wallet, managed by all involved parties through a dEOA</h4>
        <div>
            <div id="dealNatureDiv">
            <span id="dealNatureSpan">Deal Nature</span><select id="dealNatureSelect">
                <option value="ACQUISITION">ACQUISITION</option>
                <option value="MERGER">MERGER</option>
            </select>
            </div>
            <button id="createWalletButton" onClick={setupVault}>Create Secure Vault!</button>
            <br></br><input className="participant" value="enter address of first participant" type="text"></input><button className="registerButton" onClick={addUser}>Register</button>
            <button id="createWalletButton" onClick={generateWallet}>Generate Secure Wallet!</button>
        </div>
        </section>
        <section>
            <h2 id="dealSummaryHeader">Deal Summary</h2>
            <table id="walletSummaryTable">
                <tbody>
                    <tr id="walletTableRow">
                        <th className="tableHeader">Wallet Address</th>
                        <th className="tableHeader">Deal Nature</th>
                        <th className="tableHeader">Participant #1</th>
                        <th className="tableHeader">Participant #2</th>
                    </tr>
                        <td className="tableData" id="tableData-1">None</td>
                        <td className="tableData" id="tableData-2">None</td>
                        <td className="tableData" id="tableData-3">None</td>
                        <td className="tableData" id="tableData-4">None</td>
                </tbody>
            </table>
            <h2 id="activitySummaryHeader">Activity Summary</h2>
            <table id="activitySummaryTable">
                <tbody>
                    <tr id="activityTableRow">
                        <th className="activityTableHeader">Wallet Address</th>
                        <th className="activityTableHeader">Token</th>
                        <th className="activityTableHeader">Amount</th>
                    </tr>
                        <td className="tableData">None</td>
                        <td className="tableData">None</td>
                        <td className="tableData">None</td>
                </tbody>
            </table>
        </section>
        <section>
            <h4>Press the End Button to Terminate the Merger or Acquisition Activity</h4>
            <button id="endButton">End M&A Trade Execution</button>
        </section>
    </div> }</>); 
}

export default Main; 