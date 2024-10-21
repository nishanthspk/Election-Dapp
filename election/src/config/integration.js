import web3 from "web3";

import abi from "./abi.json";

import {ethers} from "ethers";

const isBroswer = () => typeof window !== "undefined";

const {ethereum} = isBrowser();

if(ethereum){
    isBrowser().web3 = new Web3(ethereum);
    isBrowser().web3 = new Web3(isBrowser().web3.currentProvider);
}