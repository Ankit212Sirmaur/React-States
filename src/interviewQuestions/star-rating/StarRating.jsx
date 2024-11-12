import React, { useState } from "react";
import "./star.css";

const StarRating = () => {
  const [rating, setRating] = useState(0); 
  const [hover, setHover] = useState(0);

  return (
    <div className="main-app">
      <h2>Star Rating App</h2>
      <div className="star-ratingApp">
        {[1, 2, 3, 4, 5].map((num) => {
          return (
            <button
              className="btn"
              onClick={() => setRating(num)} 
              onMouseOver={() => setHover(num)} 
              onMouseLeave={() => setHover(0)}
              key={num}
            >
              <span
                className={`star ${num <= (hover || rating) ? "on" : "off"}`}
              >
                &#9733; 
              </span>
            </button>
          );
        })}
      </div>
      <p>Your rating: {rating}</p>
    </div>
  );
};

export default StarRating;
