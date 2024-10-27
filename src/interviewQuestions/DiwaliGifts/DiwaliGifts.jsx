import React, { useState } from "react";

const DiwaliGifts = () => {
    const [newEmployee, setNewEmployee] = useState("");
    const [allEmployees, setAllEmployees] = useState([]);
    const [assign, setAssign] = useState(false);

    const gifts = ["smart-watch", "headphone", "sweets"];

    const handleNewEmployee = (event) => {
        setNewEmployee(event.target.value);
    }

    const handleButton = () => {
        if (newEmployee.trim()) {
            setAllEmployees([...allEmployees, { name: newEmployee, gifts: 'no assigned gifts' }]);
            setNewEmployee("");
        }
    }
    const AssingGifts = () => {
        if(!assign) {
            const assignedGifts = allEmployees.map((emp) => ({
                ...emp,
                gifts: gifts[Math.floor(Math.random() * gifts.length)]
            }));
            setAllEmployees(assignedGifts);
            setAssign(true);
        }
    }
    const ShuffleGifts =() => {
        const assignedGifts = allEmployees.map((emp, index) => ({
            ...emp,
            gifts: gifts[Math.floor(Math.random() * gifts.length)]
        }));
        setAllEmployees(assignedGifts);
    }

    const ResetGifts = () => {
        const assignedGifts = allEmployees.map((emp, index) => ({
            ...emp,
            gifts: 'no gift assign'
        }));
        setAllEmployees(assignedGifts);
    }
    return (
        <div className="p-4">
            <div className="mb-4">
                <input 
                    type="text" 
                    placeholder="Name of the employee" 
                    value={newEmployee} 
                    onChange={handleNewEmployee}
                    className="border p-2 mr-2"
                />
                <button 
                    onClick={handleButton}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Add Employee
                </button>
                <button 
                    onClick={AssingGifts}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Assing Gifts
                </button>
                <button 
                    onClick={ShuffleGifts}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Shuffle Gifts
                </button>
                <button 
                    onClick={ResetGifts}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Reset Gifts
                </button>
            </div>
            <ul className="list-disc pl-6">
                {allEmployees.map((emp, index) => (
                    <li key={index}>
                        {emp.name} - {emp.gifts}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DiwaliGifts;