import React from 'react'

export const Search = () => {
    const fetchPoll = async () => {
        const apiKey = "MJ7NJSWZWE4H78MYVV1EVQTYJC3N"; // Replace with your actual API key
        // const pollId = "5f9f7b186477891e5bc646a1"; // Your specific poll ID
        try {
          const response = await fetch(`https://api.pollsapi.com/v1/get/polls?offset=0&limit=25`, {
            method: "GET", // or omit this line, as GET is the default
            headers: {
              "Content-Type": "application/json",
              "api-key": `${apiKey}`, // Use the API key in the headers
            },
          });
      
          const data = await response.json();
          if (!response.ok) {
            throw new Error(data.message || "Error fetching data");
          }
          console.log(data); // Handle your data here
        } catch (error) {
          console.error("Fetch error:", error);
        }
      };
      
    fetchPoll();    
  return (
    <div>Search
    </div>
  )
}
