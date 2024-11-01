import React, { useEffect, useState } from "react";
import "./auto.css";

const AutoSuggestInput = () => {
	const [food, setFood] = useState("");
	const [list, setList] = useState([]);
	const [bucketList, setBucketList] = useState([]);

	const handleFoodChange = (event) => {
		event.preventDefault();
		setFood(event.target.value);
	};
	useEffect(() => {
		if (food.length >= 2) {
			fetchFood(food);
		}
	}, [food]);

	const handleInputFromAutoSuggest = (event) => {
		const idx = event.target.getAttribute("id");
		if (idx) {
			const obj = {
				id: Date.now(),
				data: list[idx],
				isDone: false,
			};
			const copyBucketList = [...bucketList];
			copyBucketList.push(obj);
			setBucketList(copyBucketList);
		}
		setFood("");
	};

  const LeftClick = (id) => {
    // done means we have to set this done after searching in the bucket list using id
    const copyBucketList = [...bucketList];
    const newBucketList = copyBucketList.map((item) => {
      if(item.id === id) {
        item.isDone = !item.isDone;
      }
      return item;
    })
    setBucketList(newBucketList);
  }
  const RightClick = (id) => {
    // now we have to delete this from the bucket list
    const copyBucketList = [...bucketList];
    const newList = copyBucketList.filter((item) => item.id !== id);
    setBucketList(newList);
  }
	const fetchFood = async (fd) => {
		try {
			const getFood = await fetch(
				`https://api.frontendeval.com/fake/food/${fd}`
			);
			const result = await getFood.json();
			setList(result);
		} catch (error) {
			return error;
		}
	};
	return (
		<div className="Auto-Suggest">
			<h3>Auto Suggest Components</h3>
			<div className="input-box">
				<label htmlFor="">Search For Products</label> <br />
				<input type="text" value={food} onChange={handleFoodChange} />
			</div>
			{food ? (
				<div
					className="Auto-suggest-list"
					onClick={handleInputFromAutoSuggest}
				>
					{list.map((item, idx) => {
						return (
							<div id={idx} className="product">
								{item}
							</div>
						);
					})}
				</div>
			) : null}
			<div className="action-tab">
        {bucketList.map((item, idx) => {
          return <div className="bucket-list">
            <button onClick={() => LeftClick(item.id)} >✓</button>
            <div className= {item.isDone ? 'strike' : null}>{item.data}</div>
            <button onClick={() => RightClick(item.id)}>x</button>
          </div>
        })}
      </div>
		</div>
	);
};

export default AutoSuggestInput;
