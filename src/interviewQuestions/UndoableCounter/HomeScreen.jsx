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
		const copyHistory = [...history];
		copyHistory.unshift(obj);
		setHistory(copyHistory);
	};
	const handleUndo = () => {
		if (history.length) {
			const copyHistory = [...history];
			const removeFirstItem = copyHistory.shift();
			setHistory(copyHistory);

			setValue(removeFirstItem.prev);

			const copyRedo = [...redo];
			copyRedo.push(removeFirstItem);
			setRedo(copyRedo);
		}
	};
	const handleRedo = () => {
		if (redo.length) {
			const copyRedoList = [...redo];
			const poppedValue = copyRedoList.pop();
			setRedo(copyRedoList);
			const { action, prev, curr } = poppedValue;
			setValue(curr);
			maintainHistory(action, prev, curr);
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
