import React, { useEffect, useState } from "react";
import "./Time.css";
const TimeWatch = () => {
	const [hrs, sethrs] = useState(0);
	const [min, setmin] = useState(0);
	const [sec, setsec] = useState(0);
	const [start, setStart] = useState(false);
	const [pause, setPause] = useState(false);
    const [timerID, setTimerId] = useState(0);

	const handleTimeChange = (event) => {
		const id = event.target.id;
		const value = event.target.value;
		if (id === "hrs") {
			sethrs(value);
		} else if (id === "min") {
			setmin(value);
		} else {
			setsec(value);
		}
	};

	const handleStart = () => {
		if (hrs === 0 && min === 0 && sec === 0) {
			alert("Please set time first");
			return;
		}
		setStart(true);
	};

    useEffect(() => {
        let id;
        if(start && !pause) {
            id = setTimeout(runtimer, 1000);
            setTimerId(id);
        }
        console.log('use Effect calling at everying 1 sec');
        
        return () => {
            clearInterval(id);
        }

    },[start, pause, hrs, min, sec])

    const runtimer = () => {
        if (hrs === 0 && min === 0 && sec === 0) {
            handleReset();
			alert("Time has finished");
			return;
		}
        console.log('run timer also running');
        
        if(sec > 0) {
            setsec((prev) => prev - 1);
        } else if(min > 0) {
            setmin((prev) => prev - 1);
            setsec(59);
        } else if(hrs > 0) {
            sethrs((prev) => prev - 1);
            setmin(59);
            setsec(59);
        }
    }

	const handleResume = () => {
        setPause((prev) => !prev)
    };

	const handleReset = () => {
        setStart(false);
        setPause(false);
        sethrs(0);
        setmin(0);
        setsec(0);
        clearInterval(timerID);
    };

	return (
		<div className="main-container">
			{start ? (
				<div className="show-time">
					<div className="timer-container">
						<span>{hrs < 0 ? `0${hrs}` : hrs}</span>
						<span>:</span>
						<span>{min < 0 ? `0${min}` : min}</span>
						<span>:</span>
						<span>{sec < 0 ? `0${hrs}` : sec}</span>

						<div className="action-button">
							{pause ? (
								<button onClick={handleResume}>Resume</button>
							) : (
								<button onClick={handleResume}>Pause</button>
							)}
							<button onClick={handleReset}>Reset</button>
						</div>
					</div>
				</div>
			) : (
				<div className="input-container">
					<input
						type="text"
						placeholder="hrs"
						id="hrs"
						onChange={handleTimeChange}
					/>
					<input
						type="text"
						id="min"
						placeholder="min"
						onChange={handleTimeChange}
					/>
					<input
						type="text"
						id="sec"
						placeholder="sec"
						onChange={handleTimeChange}
					/>
					<button onClick={handleStart}>Start</button>
				</div>
			)}
		</div>
	);
};

export default TimeWatch;
