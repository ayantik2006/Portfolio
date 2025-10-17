import { useEffect, useState } from "react";
import dp from "../assets/dp.png";

function StartPage() {
  return (
    <div className="w-screen min-h-screen bg-black flex flex-col items-center justify-center">
        <div className="mb-6 text-gray-400 text-[2rem]">
            Ayantik Sarkar
        </div>
      <div>
        <img
          src={dp}
          alt="dp"
          className="rounded-full border-5 border-gray-700"
          id="start-page-dp"
        />
      </div>
      <div className="w-[16rem] h-8 mt-[2rem] border-gray-600 border-2 rounded-[0.5rem] flex items-center justify-center overflow-hidden">
        <div className="h-[0.8rem] w-[2rem] m-1 bg-gray-300 rounded-[0.5rem] start-page-load"></div>
        <div className="h-[0.8rem] w-[2rem] m-1 bg-gray-300 rounded-[0.5rem] start-page-load"></div>
        <div className="h-[0.8rem] w-[2rem] m-1 bg-gray-300 rounded-[0.5rem] start-page-load"></div>
        <div className="h-[0.8rem] w-[2rem] m-1 bg-gray-300 rounded-[0.5rem] start-page-load"></div>
        <div className="h-[0.8rem] w-[2rem] m-1 bg-gray-300 rounded-[0.5rem] start-page-load"></div>
        <div className="h-[0.8rem] w-[2rem] m-1 bg-gray-300 rounded-[0.5rem] start-page-load"></div>
        <div className="h-[0.8rem] w-[2rem] m-1 bg-gray-300 rounded-[0.5rem] start-page-load"></div>
        <div className="h-[0.8rem] w-[2rem] m-1 bg-gray-300 rounded-[0.5rem] start-page-load"></div>
        <div className="h-[0.8rem] w-[2rem] m-1 bg-gray-300 rounded-[0.5rem] start-page-load"></div>
        <div className="h-[0.8rem] w-[2rem] m-1 bg-gray-300 rounded-[0.5rem] start-page-load"></div>
        <div className="h-[0.8rem] w-[2rem] m-1 bg-gray-300 rounded-[0.5rem] start-page-load"></div>
      </div>
      <div className="text-white font-semibold text-[1.2rem] mt-2">
        Loading...
      </div>
    </div>
  );
}

export default StartPage;
