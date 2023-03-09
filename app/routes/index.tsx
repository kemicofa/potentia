import * as React from "react";

export default function Index() {
  return (
    <div className="w-screen h-screen bg-lichking flex justify-center items-center bg-cover bg-center bg-no-repeat bg-gradient-to-b">
      <div className="flex flex-col justify-center items-center">
        <h1 className='font-title font-black text-5xl md:text-9xl animate-pulse-ts'>Potentia</h1>
        <p className="mt-8 text-xl md:text-3xl text-center text-slate-300">
          "Coming together is a beginning. Keeping together is progress. Working together is success."
        </p>
        <p className="mt-8 text-xl md:text-3xl text-slate-300">Earthshaker - Alliance</p>
        <button className="mt-8 rounded px-4 py-2 bg-orange-900 text-slate-300 flex items-center">
          <img src="/discord-50.png" alt="discord icon" className='w-6 mr-4 invert'/>
          Apply today
        </button>
      </div>
    </div>
  );
}
