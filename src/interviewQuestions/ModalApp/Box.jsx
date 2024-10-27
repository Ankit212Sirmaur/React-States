import React from "react";
import "./modal.css";

const Box = ({ hanldeOfferAccept, hanldeClose }) => {

  const handleOutsideClick = (event) => {
    console.log(event.target.className); // here is box
    if(event.target.className === 'box') {
      hanldeClose();
    }
  }
	return (
		<div className="box" onClick={handleOutsideClick}>
			<div className="modal-content">
				<button onClick={hanldeClose} className="cls-btn">
					X
				</button>
				<div className="content">
					click the below button to accept the offer letter
				</div>
				<button onClick = {hanldeOfferAccept}className="apt-btn">Accept Offer</button>
			</div>
		</div>
	);
};

export default Box;
