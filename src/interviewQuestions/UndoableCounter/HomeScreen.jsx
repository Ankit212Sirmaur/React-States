import React, { useState } from "react";
import "./file.css";

const HomeScreen = () => {
	const [value, setValue] = useState(0);
	let incArray = ["+1", "+10", "+100"];
	let decArray = ["-1", "-10", "-100"];
	const [history, setHistory] = useState([]);
	const [redo, setRedo] = useState([]);

	const handleClick = (key) => {
		const val = parseInt(key);
		maintainHistory(key, value, val + value);
		setValue((existingValue) => existingValue + val);
	};

	const maintainHistory = (key, prev, curr) => {
		const obj = {
			action: key,
			prev,
			curr,
		};
		setHistory((prev) => [obj, ...prev]);
	};
	const handleUndo = () => {
		if (history.length) {
			const [removeFirstItem, ...copyHistory] = history;
			// rest operator 
			setHistory(copyHistory);
			setValue(removeFirstItem.prev);
			setRedo(prevRedo => [...prevRedo, removeFirstItem]);
		}
	};
	/**
	 * const { name, age, ...rest } = props; // rest operator
	 * setState(prevState => ({ ...prevState, key: value })); //
	 */
	const handleRedo = () => {
		if (redo.length) {
		  const { action, prev, curr } = redo.pop();  // Directly pop the last item
		  setRedo([...redo]);  // Trigger a state update with a shallow copy
		  setValue(curr);  // Set the new value
		  maintainHistory(action, prev, curr);  // Maintain history
		}
	  };
	  
	return (
		<div className="app">
			<div className="Home-Screen">
				<h3>Undoable Counter</h3>
				<div className="undo-redo">
					<button onClick={handleUndo}>Undo</button>
					<button onClick={handleRedo}>Redo</button>
				</div>
			</div>
			<div className="inc-dec">
				{decArray.map((arr) => {
					return (
						<button onClick={() => handleClick(arr)}>{arr}</button>
					);
				})}
				<div className="main-text-value">{value}</div>
				{incArray.map((arr) => {
					return (
						<button onClick={() => handleClick(arr)}>{arr}</button>
					);
				})}
			</div>

			<div className="history-board">
				{history.map((item) => {
					return (
						<div className="row">
							<div>{item.action}</div>
							<div>{`[ ${item.prev} -> ${item.curr} ]`}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default HomeScreen;
