import Web3 from "web3";
import abi from "./abi.json";
import { ethers } from 'ethers';

const isBrowser = () => typeof window !== "undefined";

const { ethereum } = isBrowser() ;



const CONTRACTADDRESS = "0x5D7E4C0C04D26C1Aa3DBD8284Ca7b0916765F9e7";

if (ethereum) {
    isBrowser().web3 = new Web3(ethereum); 
    isBrowser().web3 = new Web3(isBrowser().web3.currentProvider);
  }

// Contest Function

export const CONTESTANTNAME =async ({name}) => {
    try {
        const provider = 
        window.ethereum != null
          ? new ethers.providers.Web3Provider(window.ethereum)
          : ethers.providers.getDefaultProvider();
    
        const signer = provider.getSigner();
        const Role = new ethers.Contract(CONTRACTADDRESS, abi, signer);
        console.log('====================================');
        console.log("integration", name);
        console.log('====================================');
        const answer = await Role.contest(name);
        return answer;
    } catch (error) {
        console.error('Error adding name:', error);
    }
}

// Start Election Function
export const STARTELECTION = async () => {
    try {
        const provider = 
        window.ethereum != null
          ? new ethers.providers.Web3Provider(window.ethereum)
          : ethers.providers.getDefaultProvider();
    
        const signer = provider.getSigner();
        const Role = new ethers.Contract(CONTRACTADDRESS, abi, signer);
        const answer = await Role.startElection();
        return answer;
    } catch (error) {
        console.error('Error adding name:', error);
    }
}

// Get All Contestants Function
export const GETALLCONTESTANTS = async () => { // Adjusted to match import
    try {
        const provider = 
        window.ethereum != null
          ? new ethers.providers.Web3Provider(window.ethereum)
          : ethers.providers.getDefaultProvider();
    
        const signer = provider.getSigner();
        const Role = new ethers.Contract(CONTRACTADDRESS, abi, signer);
        const answer = await Role.getAllContestants();
        return answer;
    } catch (error) {
        console.error('Error getting names:', error);
    }
}

// Vote Function
export const VOTE = async ({ name }) => {
    try {
        const provider = 
        window.ethereum != null
          ? new ethers.providers.Web3Provider(window.ethereum)
          : ethers.providers.getDefaultProvider();
    
        const signer = provider.getSigner();
        const Role = new ethers.Contract(CONTRACTADDRESS, abi, signer);
        const answer = await Role.voteForCandidate(name);
        return answer;
    } catch (error) {
        console.error('Error voting:', error);
    }
}

// Get Winner Function
export const GETWINNER = async () => {
    try {
        const provider = 
        window.ethereum != null
          ? new ethers.providers.Web3Provider(window.ethereum)
          : ethers.providers.getDefaultProvider();
    
        const signer = provider.getSigner();
        const Role = new ethers.Contract(CONTRACTADDRESS, abi, signer);
        const answer = await Role.getWinner();
        return answer;
    } catch (error) {
        console.error('Error fetching winner:', error);
    }
}

// End Election Function
export const ENDELECTION = async () => {
    try {
        const provider = 
        window.ethereum != null
          ? new ethers.providers.Web3Provider(window.ethereum)
          : ethers.providers.getDefaultProvider();
    
        const signer = provider.getSigner();
        const Role = new ethers.Contract(CONTRACTADDRESS, abi, signer);
        const answer = await Role.endElection();
        return answer;
    } catch (error) {
        console.error('Error ending:', error);
    }
}

export const ISVOTED =async ({walletaddress}) => {
    try {
        const provider = 
        window.ethereum != null
          ? new ethers.providers.Web3Provider(window.ethereum)
          : ethers.providers.getDefaultProvider();
    
        const signer = provider.getSigner();
        const Role = new ethers.Contract(CONTRACTADDRESS, abi, signer);
        console.log('====================================');
        console.log("integration", walletaddress);
        console.log('====================================');
        const answer = await Role.voted(walletaddress);
        return answer;
    } catch (error) {
        console.error('Error fetching isVoted:', error);
    }
}