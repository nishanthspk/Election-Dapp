import { useState } from "react";
import "./App.css";
import Contest from "./Component/Contest";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ENDELECTION, GETALLCONTESTANTS, GETWINNER, STARTELECTION } from "./config/integration";
import Vote from "./Component/Vote";

function App() {

  const [contestants, setContestants ] = useState([]);
  const [winner, setWinner ] = useState();

  const getAllContestants = async () => {
    console.log("clicked");
    const result = await GETALLCONTESTANTS();
    setContestants(result);
    console.log("contestants", result);
  }
  const startElection = async () => {
    console.log("clicked");
    const result = await STARTELECTION();
    console.log("election", result);
  }
  const endElection = async () => {
    console.log("clicked");
    const result = await ENDELECTION();
    console.log("endelection", result);
  }
  const getWinner = async () => {
    console.log("clicked");
    const result = await GETWINNER();
    setWinner(result);
    console.log("getWinner", result);
  }
  
  

  return (
    <>
    <div className="bg-violet-200 h-screen">
      <div className="flex justify-end pt">
       
        <ConnectButton />
      </div>
      <Contest />

      <div className="flex justify-center items-center">

      <button
          className="bg-blue-500 rounded-full border  border-amber-700 text-white py-2 px-5 mt-4"
          onClick={startElection}
        >
         Start Election
        </button>
      </div>
      <Vote />
      <div className="flex justify-center items-center">
      <button
          className="bg-blue-500 rounded-full border border-amber-700 text-white py-2 px-5 mt-4"
          onClick={endElection}
        >
         End Election
        </button>

        </div>
      <div className="flex justify-center items-center">
      <button
          className="bg-blue-500 rounded-full border border-amber-700 text-white py-2 px-5 mt-4"
          onClick={getAllContestants}
        >
        Show contestants
        </button>

   

        </div>


        <div className="mt-4">
        {contestants &&
          contestants.map((contestant, index) => (
            <div key={index} className="my-2">
              <p className="font-bold text-center text-lg">{index+1}.{contestant}</p>
             
            </div>
          ))}
      </div>


      <div className="flex justify-center items-center">
      <button
          className="bg-blue-500 rounded-full border border-amber-700 text-white py-2 px-5 mt-4"
          onClick={getWinner}
        >
        Show winner
        </button>

   

        </div>

      <div>

        {winner && winner}
      </div>
      </div>
    </>
  );
}

export default App;