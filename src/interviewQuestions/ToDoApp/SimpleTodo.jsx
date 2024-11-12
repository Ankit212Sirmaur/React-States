import React, { useState } from "react";
import "./todo.css";
const SimpleTodo = () => {
	const [value, setValue] = useState("");
	const [todoList, setTodoList] = useState([]);
	const handleInputValue = (event) => {
		event.preventDefault();
		setValue(event.target.value);

	};

	const handleTaskList = () => {
		const newTaskList = todoList.map((item) => {
			return { ...item };
		});
		newTaskList.push({
			value,
			isCompleted: false,
			id: new Date().getTime(),
		});
		setTodoList(newTaskList);
        setValue("");
	};
	const clickRemove = (id) => {
        const filterItem = todoList.filter((item) => item.id !== id);
        setTodoList(filterItem);
    };
	const clickDone = (id) => {
        const newList = todoList.map((item) => {
            if (item.id === id) {
                return { ...item, isCompleted: !item.isCompleted }; // Create a new object for the completed item
            }
            return item; // Return the original item if it doesn't match
        });
        setTodoList(newList);
    };
    
	return (
		<div className="main-todo-app">
			<div className="input-field">
				<input type="text" value={value} onChange={handleInputValue} />
				<button onClick={handleTaskList}>Add Task</button>
			</div>
			{todoList.length > 0 &&
				todoList.map((item, idx) => {
					return (
						<div className="list-item" id={idx}>
							<ul className = {item.isCompleted ? 'strike': ''} >{item.value}</ul>
							<button onClick={() => clickDone(item.id)}>
								✓
							</button>
							<button onClick={() => clickRemove(item.id)}>
								✗
							</button>
						</div>
					);
				})}
		</div>
	);
};

export default SimpleTodo;
