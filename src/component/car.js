import React, { useState } from "react";

function CarProperty(){
    const [car, setcar] = useState({
        model: 'innova',
        year: 2017,
        color: 'red'
    });

    setcar({...car ,color: "white"});

    function updateCar(){
        
    }

}

export default CarProperty;