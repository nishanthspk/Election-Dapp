import Web3 from "web3";
import abi from "./abi.json";
import { ethers } from 'ethers';

const isBrowser = () => typeof window !== "undefined";

const { ethereum } = isBrowser() ;



const Address = "0x49091ef27c2fba692B27f3cC2874a89EA950854E";

if (ethereum) {
    isBrowser().web3 = new Web3(ethereum); 
    isBrowser().web3 = new Web3(isBrowser().web3.currentProvider);
  }

// Contest Function
export const contest = async ({ name }) => {
    // await requestAccount(); // Request access to the user's accounts

    // Correct conditional provider initialization
    const provider = 
        window.ethereum != null
          ? new ethers.providers.Web3Provider(window.ethereum)
          : ethers.providers.getDefaultProvider();

          console.log(provider);
    // Ensure no syntax errors in the following lines
    const signer = provider.getSigner(); // Get the signer
    const contractInstance = new ethers.Contract(Address, abi, signer);
    console.log(signer);

    try {
        const response = await contractInstance.contest(name);
        console.log(response);
        return response;
    } catch (error) {
        console.error("Error sending transaction:", error);
    }
}

// Start Election Function
export const startElection = async () => {
    // await requestAccount(); // Request access to the user's accounts

    const provider = 
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
    
    const signer = provider.getSigner(); // Get the signer
    const contractInstance = new ethers.Contract(Address, abi, signer);
    console.log(signer);

    try {
        const response = await contractInstance.startElection();
        console.log(response);
        return response;
    } catch (error) {
        console.error("Error sending transaction:", error);
    }
}

// Get All Contestants Function
export const getAllContestants = async () => { // Adjusted to match import
    const provider = 
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();

    const signer = provider.getSigner(); // Get the signer
    const contractInstance = new ethers.Contract(Address, abi, signer);
    
    try {
        const response = await contractInstance.getallContestants();
        console.log(response);
        return response;
    } catch (error) {
        console.error("Error fetching contestants:", error);
    }
}

// Vote Function
export const vote = async ({ name }) => {
    // await requestAccount(); // Request access to the user's accounts

    const provider = 
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
    
    const signer = provider.getSigner(); // Get the signer
    const contractInstance = new ethers.Contract(Address, abi, signer);
    
    try {
        const response = await contractInstance.voteforCandidates(name);
        console.log(response);
        return response;
    } catch (error) {
        console.error("Error sending vote:", error);
    }
}

// Get Winner Function
export const getWinner = async () => {
    const provider = 
        window.ethereum != null
          ? new ethers.providers.Web3Provider(window.ethereum)
          : ethers.providers.getDefaultProvider();
    
    const signer = provider.getSigner(); // Get the signer
    const contractInstance = new ethers.Contract(Address, abi, signer);
    
    try {
        const response = await contractInstance.getWinner();
        console.log(response);
        return response;
    } catch (error) {
        console.error("Error fetching winner:", error);
    }
}

// End Election Function
export const endElection = async () => {
    // await requestAccount(); // Request access to the user's accounts

    const provider = 
        window.ethereum != null
          ? new ethers.providers.Web3Provider(window.ethereum)
          : ethers.providers.getDefaultProvider();
    
    const signer = provider.getSigner(); // Get the signer
    const contractInstance = new ethers.Contract(Address, abi, signer);
    
    try {
        const response = await contractInstance.endElection();
        console.log(response);
        return response;
    } catch (error) {
        console.error("Error ending election:", error);
    }
}
