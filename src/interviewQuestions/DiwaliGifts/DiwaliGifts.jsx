import React, { useState } from "react";

const DiwaliGifts = () => {
    const [name, setname] = useState("");
    const [employeeList, setemployeeList] = useState([]);
    const [assign, setAssign] = useState(false);

    const gifts = ["smart-watch", "headphone", "sweets"];

    const handleName = (event) => {
        setname(event.target.value);
    }

    const handleButton = () => {
        if (name.trim()) {
            setemployeeList([...employeeList, { name: name, gifts: 'no assigned gifts' }]);
            setname("");
        }
    }
    const AssingGifts = () => {
        if(!assign) {
            const assignedGifts = employeeList.map((emp) => ({
                ...emp,
                gifts: gifts[Math.floor(Math.random() * gifts.length)]
            }));
            setemployeeList(assignedGifts);
            setAssign(true);
        }
    }
    const ShuffleGifts =() => {
        const assignedGifts = employeeList.map((emp, index) => ({
            ...emp,
            gifts: gifts[Math.floor(Math.random() * gifts.length)]
        }));
        setemployeeList(assignedGifts);
    }

    const ResetGifts = () => {
        const assignedGifts = employeeList.map((emp, index) => ({
            ...emp,
            gifts: 'no gift assign'
        }));
        setemployeeList(assignedGifts);
    }
    return (
        <div className="p-4">
            <div className="mb-4">
                <input 
                    type="text" 
                    placeholder="Name of the employee" 
                    value={name} 
                    onChange={handleName}
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
                {employeeList.map((emp, index) => (
                    <li key={index}>
                        {emp.name} - {emp.gifts}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DiwaliGifts;