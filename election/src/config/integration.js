import web3 from "web3";

import abi from "./abi.json";

import {ethers} from "ethers";

const isBroswer = () => typeof window !== "undefined";

const {ethereum} = isBrowser();

if(ethereum){
    isBrowser().web3 = new Web3(ethereum);
    isBrowser().web3 = new Web3(isBrowser().web3.currentProvider)
}

const Address = "0x49091ef27c2fba692B27f3cC2874a89EA950854E";

//contest

export const contest =sync ({name}) => {
//provider

const provider = window.ethereum !=null ? new ethers.providers.Web3Provider(window.ethereum): ethers.provider.getDefaultProvider()
//signer
const signer = provider.getSigner();
//contract instance
const contractInstance = new ethers.Contract(Address,abi,signer);
const response = await contractInstance.contest(name);
console.log(response);
return response;



}

//start election 

export const startElection =sync () => {
    //provider
    
    const provider = window.ethereum !=null ? new ethers.providers.Web3Provider(window.ethereum): ethers.provider.getDefaultProvider()
    //signer
    const signer = provider.getSigner();
    //contract instance
    const contractInstance = new ethers.Contract(Address,abi,signer);
    const response = await contractInstance.startElection();
    console.log(response);
    return response;
    
    
    
    }

//get all candidates

export const getallContestants =sync () => {
    //provider
    
    const provider = window.ethereum !=null ? new ethers.providers.Web3Provider(window.ethereum): ethers.provider.getDefaultProvider()
    //signer
    const signer = provider.getSigner();
    //contract instance
    const contractInstance = new ethers.Contract(Address,abi,signer);
    const response = await contractInstance.getallContestants();
    console.log(response);
    return response;
    
    
    
    }

//vote for candidates

export const vote =sync ({name}) => {
    //provider
    
    const provider = window.ethereum !=null ? new ethers.providers.Web3Provider(window.ethereum): ethers.provider.getDefaultProvider()
    //signer
    const signer = provider.getSigner();
    //contract instance
    const contractInstance = new ethers.Contract(Address,abi,signer);
    const response = await contractInstance.voteforCandidates(name);
    console.log(response);
    return response;
    
    
    
    }

//get winner

export const getWinner =sync ({}) => {
    //provider
    
    const provider = window.ethereum !=null ? new ethers.providers.Web3Provider(window.ethereum): ethers.provider.getDefaultProvider()
    //signer
    const signer = provider.getSigner();
    //contract instance
    const contractInstance = new ethers.Contract(Address,abi,signer);
    const response = await contractInstance.getWinner();
    console.log(response);
    return response;
    
    
    
    }

//end election

export const endElection =sync () => {
    //provider
    
    const provider = window.ethereum !=null ? new ethers.providers.Web3Provider(window.ethereum): ethers.provider.getDefaultProvider()
    //signer
    const signer = provider.getSigner();
    //contract instance
    const contractInstance = new ethers.Contract(Address,abi,signer);
    const response = await contractInstance.endElection();
    console.log(response);
    return response;
    
    
    
    }