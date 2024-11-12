import React, { useEffect, useState } from "react";
import "./Timer.css";

const TimerChallenge = () => {
  const [start, setStart] = useState(false);
  const [paused, setPaused] = useState(false);
  const [hrs, setHrs] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [timerId, setTimerId] = useState(0);

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    const id = event.target.id;
    if (id === 'hrs') {
      setHrs(value);
    } else if (id === 'min') {
      setMin(value);
    } else {
      setSec(value);
    }
  }

  const runTimer = () => {
    if (hrs === 0 && min === 0 && sec === 0) {
      handleReset();
      alert('time has finished');
      return;
    }

    if (sec > 0) {
      setSec(s => s - 1);
    } else if (min > 0) {
      setMin(m => m - 1);
      setSec(59);
    } else if (hrs > 0) {
      setHrs(h => h - 1);
      setMin(59);
      setSec(59);
    }
  }

  useEffect(() => {
    let id;
    if (start && !paused) {
      id = setInterval(runTimer, 1000);
      setTimerId(id);
    }
    return () => {
      clearInterval(id);
    }
  }, [start, paused, hrs, min, sec]);

  const handleStart = () => {
    if (hrs === 0 && min === 0 && sec === 0) {
      alert('Please set time first');
      return;
    }
    setStart(true);
    setPaused(false);
  }

  const handlePause = () => {
    setPaused(true);
    clearInterval(timerId);
  }

  const handleResume = () => {
    setPaused(false);
  }

  const handleReset = () => {
    setStart(false);
    setPaused(false);
    setHrs(0);
    setMin(0);
    setSec(0);
    clearInterval(timerId);
  }

  return (
    <div className="input-container">
      {!start && (
        <div>
          <h2>CountDown timer</h2>
          <div className="input-box">
            <input type="text" id="hrs" placeholder="hrs" onChange={handleInputChange} />
            <input type="text" id="min" placeholder="min" onChange={handleInputChange} />
            <input type="text" id="sec" placeholder="sec" onChange={handleInputChange} />
          </div>
          <button className="start-btn" onClick={handleStart}>start</button>
        </div>
      )}

      {start && (
        <div className="show-container">
          <div className="timer-box">
            <div>{hrs < 0 ? `0${hrs}` : hrs}</div>
            <span>:</span>
            <div>{min < 0 ? `0${min}` : min}</div>
            <span>:</span>
            <div>{sec < 0 ? `0${sec}` : sec}</div>
          </div>
          <div className="action-btn">
            {!paused ? (
              <button onClick={handlePause}>Pause</button>
            ) : (
              <button onClick={handleResume}>Resume</button>
            )}
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimerChallenge;