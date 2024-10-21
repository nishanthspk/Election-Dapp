import Web3 from "web3";
import abi from "./abi.json";
import { ethers } from 'ethers';

const isBrowser = () => typeof window !== "undefined";

const { ethereum } = isBrowser() ? window : {};

if (ethereum) {
    const web3Instance = new Web3(ethereum);
    window.web3 = web3Instance; // Set Web3 instance in the browser's window object
    web3Instance.setProvider(ethereum); // Use the current provider
}

const Address = "0x49091ef27c2fba692B27f3cC2874a89EA950854E";

// Contest Function
export const contest = async ({ name }) => {
    const provider = window.ethereum 
        ? new ethers.BrowserProvider(window.ethereum) 
        : ethers.getDefaultProvider();
    const signer = provider.getSigner();
    const contractInstance = new ethers.Contract(Address, abi, signer);
    const response = await contractInstance.contest(name);
    console.log(response);
    return response;
}

// Start Election Function
export const startElection = async () => {
    const provider = window.ethereum 
        ? new ethers.BrowserProvider(window.ethereum) 
        : ethers.getDefaultProvider();
    const signer = provider.getSigner();
    const contractInstance = new ethers.Contract(Address, abi, signer);
    const response = await contractInstance.startElection();
    console.log(response);
    return response;
}

// Get All Contestants Function
export const getAllContestants = async () => {
    const provider = window.ethereum 
        ? new ethers.BrowserProvider(window.ethereum) 
        : ethers.getDefaultProvider();
    const signer = provider.getSigner();
    const contractInstance = new ethers.Contract(Address, abi, signer);
    const response = await contractInstance.getAllContestants(); // Use the correct function name
    console.log(response);
    return response;
}

// Vote Function
export const vote = async ({ name }) => {
    const provider = window.ethereum 
        ? new ethers.BrowserProvider(window.ethereum) 
        : ethers.getDefaultProvider();
    const signer = provider.getSigner();
    const contractInstance = new ethers.Contract(Address, abi, signer);
    const response = await contractInstance.voteForCandidates(name); // Use the correct function name
    console.log(response);
    return response;
}

// Get Winner Function
export const getWinner = async () => {
    const provider = window.ethereum 
        ? new ethers.BrowserProvider(window.ethereum) 
        : ethers.getDefaultProvider();
    const signer = provider.getSigner();
    const contractInstance = new ethers.Contract(Address, abi, signer);
    const response = await contractInstance.getWinner();
    console.log(response);
    return response;
}

// End Election Function
export const endElection = async () => {
    const provider = window.ethereum 
        ? new ethers.BrowserProvider(window.ethereum) 
        : ethers.getDefaultProvider();
    const signer = provider.getSigner();
    const contractInstance = new ethers.Contract(Address, abi, signer);
    const response = await contractInstance.endElection();
    console.log(response);
    return response;
}
