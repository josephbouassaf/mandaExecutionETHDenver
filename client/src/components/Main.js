import { useEffect, useState } from "react";
import { web3 } from "../utils/ethereum/web3";
import { abi } from "../utils/ethereum/contracts";

const Main = () => {

    const [domLoaded, setDomLoaded] = useState(false);
    const [signatories, setSignatories] = useState(0); 

    const handleAddSignatory = () => {
        var participant = '<br></br><input className="participant" id={"participant-"+signatories} value="enter wallet address" type="text"></input>'; 
        setSignatories(signatories+1);
        document.getElementById("signatoriesDiv").insertAdjacentHTML('afterbegin',participant); 
    }

    const getTokenSymbol = async (address) => {
        const contractInstance = new web3.eth.Contract(abi,address); 
        const symbol = await contractInstance.methods.symbol().call(); 
        return symbol; 
    }
    const createWallet = () => {
        // TODO
            // get all the signatories addresses from the input values
            // create intu wallet
                // get the symbols of the tokens
                // save symbol, deal nature, intu wallet address in localstorage
                // add a row with the above info in the table with nested table for acitivty
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
            <h4>Manda Execution Tool: Execute Merger & Acquisition securely</h4>
        </section>
        <section>
        <h4>Generate a secure MPC wallet, managed by all involved parties</h4>
        <div>
            <span id="signatoriesSpan">Add a signatory to the wallet</span><button onClick={handleAddSignatory} id="addButton">+</button>
            <div id="signatoriesDiv"></div>
            <br></br>
            <div id="dealNatureDiv">
            <span id="dealNatureSpan">Deal Nature</span><select id="dealNatureSelect">
                <option value="ACQUISITION">ACQUISITION</option>
                <option value="MERGER">MERGER</option>
            </select>
            </div>
            <button id="createWalletButton">Create Secure Wallet!</button>
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
                        <td className="tableData">None</td>
                        <td className="tableData">None</td>
                        <td className="tableData">None</td>
                        <td className="tableData">None</td>
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