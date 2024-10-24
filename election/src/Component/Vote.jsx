import React, { useEffect } from "react";
import { useState } from "react";
import { GETALLCONTESTANTS, ISVOTED, VOTE } from "../config/integration";
import { useAccount } from "wagmi";
const Vote = () => {
  // const [name, setName] = useState("");
  
  const [contestants, setContestants ] = useState([]);
  const account = useAccount();
  const address = account.address;
  const getAllContestants = async () => {
    console.log("clicked");
    const result = await GETALLCONTESTANTS();
    setContestants(result);
    console.log("contestants", result);
  }
  useEffect(() => {
    getAllContestants();
  },[]);
  const handleSubmit = async (name) => {
    console.log("Submitted username:", name);
    // You can perform further actions here, such as sending the data to a backend server
    const res = await VOTE({ name });
    console.log(res);
  };
  const isCheckVoted = async () => {
    console.log("Clicked", account.address);
    // You can perform further actions here, such as sending the data to a backend server
    const res = await ISVOTED({walletaddress: address});
    console.log(res);
  };
  return (
    <div className="flex pl-10 mt-10">
      <div className="w-72">
        {/* <div className="relative w-full min-w-[200px] h-10">
          <input
            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
            placeholder=" "
            onChange={(e) => setName(e.target.value)}
          />
          <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
            Username
          </label>
        </div> */}
        
        {/* <div className="mt-4">
        {contestants &&
          contestants.map((contestant, index) => (
            <div key={index} className="my-2 flex">
              <p className="font-bold text-center text-lg">{index+1}.{contestant}</p>
              <button
                className="bg-blue-500 rounded-full border border-amber-700 text-white py-2 px-5 mt-4"
                onClick={() => {handleSubmit(contestant)}}
              >
                Vote
              </button>
            </div>
          ))}
      </div> */}

        <button
          className="bg-blue-500 rounded-full border border-amber-700 text-white py-2 px-5 mt-4"
          onClick={isCheckVoted}
        >
          Is Vote
        </button>
      </div>
    </div>
  );
};

export default Vote;