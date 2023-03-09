import * as React from "react";

export default function Index() {
  return (
    <div className="w-screen h-screen bg-lichking flex justify-center items-center bg-cover bg-no-repeat bg-gradient-to-b">
      <div className="flex flex-col justify-center items-center">
        <h1 className='font-title font-black text-9xl animate-pulse-ts'>Potentia</h1>
        <p className="text-3xl">Earthshaker - Alliance</p>
        <button className="px-4 py-2 bg-orange-900 text-white flex items-center">
          <img src="/discord-50.png" alt="discord icon" className='w-6 mr-4 invert'/>
          Apply today
        </button>
      </div>
    </div>
  );
}
