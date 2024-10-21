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
const contractInstance = new ethers.Contract(Address,abi,signer);
const response = await contractInstance.contest(name);
console.log(response);
return response;

//contract instance

}

//start election 

//get all candidates

//end election