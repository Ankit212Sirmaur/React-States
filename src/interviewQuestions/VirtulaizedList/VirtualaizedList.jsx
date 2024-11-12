import React, { useEffect, useState } from "react";

export const VirtualaizedList = () => {
  const url2 = "https://fakestoreapi.com/products";
  const [list, setList] = useState([]);

	function make_Get_Request(url2) {
		fetch(url2)
    .then((res) => res.json())
    .then(res => setList(res));
	}

  useEffect(() => {
    make_Get_Request(url2) 
  },[])

	return <div className="list-app">
    {list.length > 0 && 
     list.map((item, idx) => {
      return <div className="image-container">
        <img src= {item.image} key={idx} alt="product-images" />
      </div>
     })
    }
  </div>;
};
