import React, { useEffect, useState } from 'react'
import "./App.css";
function App() {
  const [seconds,setSeconds] = useState(0);
  const [isRunning,setIsRunning] = useState(false);
  useEffect(() =>{
    let interval;
  if(isRunning){
    interval = setInterval(() =>{
      setSeconds(prevSeconds => prevSeconds + 1);
    },1000)

    return () => clearInterval(interval);
  }
  },[isRunning])
  const handleStart = () =>{
    setIsRunning(true);
  }
  const handleStop = () => {
    setIsRunning(false);

  }

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  }

  return (
    <div>
      <p className="timer">
        {seconds >= 60 ? Math.floor(seconds / 60 ): 0} mins {seconds > 60 ? Math.floor(seconds % 60) : seconds} secs
      </p>
      <div className='actions'>
      <button className='btn start-btn' onClick={handleStart}>Start</button>
      <button className='btn stop-btn' onClick={handleStop}>Stop</button>
      <button className='btn reset-btn' onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default App