"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
let[count,setCount] = useState(0)
let[running,setRunning] = useState(false)

useEffect(()=>{
let timmer:any;
if(running){
  timmer = setInterval(()=>{
    setCount((previousCount)=> previousCount + 1)
  },100)
}

return()=>{
  clearInterval(timmer);
}

},[running,count])

// for button 
const startButton = ()=>{
  setRunning(true)
};
const pauseButton = ()=>{
  setRunning(false)
};
const endButton = ()=>{
  setRunning(false)
  setCount(0)
};

return (
  <div id="main" className="h-screen flex justify-center items-center">
    
    
    <div className="bg-slate-300 p-10 shadow-lg shadow-slate-700
    flex flex-col gap-10 items-center rounded-xl">
      <h1 className="text-4xl font-bold">Counter App</h1>
      <p className="text-3xl font-bold">{count}</p>
    
    {/* buttons */}
    <div className="flex gap-4">
      <button onClick={startButton}  className="bg-slate-800 hover:bg-slate-950 text-white p-3 rounded-xl">Start</button>
      <button onClick={pauseButton} className="bg-slate-800 hover:bg-slate-950 text-white p-3 rounded-xl">Pause</button>
      <button onClick={endButton} className="bg-slate-800 hover:bg-slate-950 text-white p-3 rounded-xl">End</button>
    </div>
    
    
    </div>    
  </div>
  );
}
