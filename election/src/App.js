import { useState } from "react";
import "./App.css";
import Contest from "./Component/Contest";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Vote from "./Component/Vote";
import { getAllContestants } from "./config/integration";
import { startElection,endElection,getWinner } from "./config/integration";

function App() {

  const [contestants, setContestants ] = useState([]);
  const [winner, setWinner ] = useState();

  const handleSubmit = async () => {
    console.log("Submitted ");
    // You can perform further actions here, such as sending the data to a backend server
     const res = await getAllContestants();

     console.log(res);

     setContestants(res);
  };
  const handleGetWinner = async () => {
    console.log("Submitted ");
    // You can perform further actions here, such as sending the data to a backend server
     const res = await getWinner();

     console.log(res);

     setWinner(res);
  };
  const startelection = async () => {
    console.log("Submitted username:");
     const res = await startElection();

     console.log(res);
  };
  const endelection = async () => {
    console.log("Submitted username:");
    const res = await endElection();

     console.log(res);
  };
  return (
    <>
      <div className="flex justify-end">
        <ConnectButton />
      </div>
      <Contest />

      <div className="flex justify-center items-center">

      <button
          className="bg-blue-500 rounded-full border  border-amber-700 text-white py-2 px-5 mt-4"
          onClick={startelection}
        >
         Start Election
        </button>
      </div>
      <Vote />
      <div className="flex justify-center items-center">
      <button
          className="bg-blue-500 rounded-full border border-amber-700 text-white py-2 px-5 mt-4"
          onClick={endelection}
        >
         End Election
        </button>

        </div>
      <div className="flex justify-center items-center">
      <button
          className="bg-blue-500 rounded-full border border-amber-700 text-white py-2 px-5 mt-4"
          onClick={handleSubmit}
        >
        Show contestants
        </button>

   

        </div>


        <div className="mt-4">
        {contestants &&
          contestants.map((contestant, index) => (
            <div key={index} className="my-2">
              {/* Customize the styling as per your requirements */}
              <p className="font-bold text-center text-lg">{index+1}.{contestant}</p>
             
            </div>
          ))}
      </div>


      <div className="flex justify-center items-center">
      <button
          className="bg-blue-500 rounded-full border border-amber-700 text-white py-2 px-5 mt-4"
          onClick={handleGetWinner}
        >
        Show winner
        </button>

   

        </div>

      <div>

        {winner && winner}
      </div>

    </>
  );
}

export default App;