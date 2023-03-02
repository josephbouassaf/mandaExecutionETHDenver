import { useEffect } from "react";
import MetaMaskOnboarding from '@metamask/onboarding';

const Metamask = () => {

const forwarderOrigin = 'http://localhost:9010';
    
const initialize = () => {
    //Basic Actions Section
    const onboardButton = document.getElementById('connectButton');
    //Created check function to see if the MetaMask extension is installed
    const isMetaMaskInstalled = () => {
      //Have to check the ethereum binding on the window object to see if it's installed 
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
    };
  
    //We create a new MetaMask onboarding object to use in our app
    const onboarding = new MetaMaskOnboarding({ forwarderOrigin });
  
    //This will start the onboarding proccess
    const onClickInstall = () => {
      onboardButton.innerText = 'Onboarding in progress';
      onboardButton.disabled = true;
      //On this object we have startOnboarding which will start the onboarding process for our end user
      onboarding.startOnboarding();
    };
  
    const onClickConnect = async () => {
      try {
        // Will open the MetaMask UI
        // You should disable this button while the request is pending!
        onboardButton.disabled = true; 
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        //We take the first address in the array of addresses and display it
        onboardButton.innerHTML = accounts[0] || 'Not able to get accounts';
      } catch (error) {
        console.error(error);
      }
      onboardButton.disabled = false;
    };
  
    const MetaMaskClientCheck = () => {
      //Now we check to see if Metamask is installed
      if (!isMetaMaskInstalled()) {
        //If it isn't installed we ask the user to click to install it
        onboardButton.innerText = 'Click here to install MetaMask!';
        //When the button is clicked we call th is function
        onboardButton.onclick = onClickInstall;
        //The button is now disabled
        onboardButton.disabled = false;
      } else {
        //If MetaMask is installed we ask the user to connect to their wallet
        onboardButton.innerText = 'Connect';
        //When the button is clicked we call this function to connect the users MetaMask Wallet
        onboardButton.onclick = onClickConnect;
        //The button is now disabled
        onboardButton.disabled = false;
      }
    };
    MetaMaskClientCheck();
  };
  
  useEffect(() => {
    initialize(); 
    window.addEventListener('DOMContentLoaded', initialize);
  })
      
    return (
        <div id="metamask">
        <button id="connectButton"></button>
        </div>
    );
}

export default Metamask