import React from "react";
import { useState } from "react";
import { CONTESTANTNAME } from "../config/integration";

const Contest = () => {
  const [name, setName] = useState("");
  const handleSubmit = async () => {
    console.log("Submitted username:", name);
    // You can perform further actions here, such as sending the data to a backend server
    const res = await CONTESTANTNAME({ name });

    console.log(res);
  };
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="w-72">
        <div className="relative w-full min-w-[200px] h-10">
          <input
            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline  disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2  text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
            placeholder="name of the contestant "
            onChange={(e) => setName(e.target.value)}
          />
          
        </div>

        <button
          className="bg-blue-500 rounded-full border border-amber-700 text-white py-2 px-5 mt-4"
          onClick={handleSubmit}
        >
          Contest
        </button>
      </div>
    </div>
  );
};

export default Contest;