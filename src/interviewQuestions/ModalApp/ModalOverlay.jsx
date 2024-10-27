import React, { useState } from "react";
import "./modal.css";
import Box from "./Box";
const ModalOverlay = () => {
	const [show, setShow] = useState(false);
	const [offer, setOffer] = useState(false);

	const handleOpenModal = () => {
		setShow(true);
	};

	const hanldeClose = () => {
		setShow(false);
	};

	const hanldeOfferAccept = () => {
		setShow(false);
		setOffer(true);
	};
	return (
		<div className="modal">
			<div className="showoffer">
				{!offer && (
					<button className="btn-offer" onClick={handleOpenModal}>
						Show Offer
					</button>
				)}
                {offer && (
                    <div style={{fontSize: '20px', color:'black'}}>your offer is accepted</div>
                )}
			</div>
			{show && (
				<Box
					hanldeOfferAccept={hanldeOfferAccept}
					hanldeClose={hanldeClose}
				/>
			)}
		</div>
	);
};

export default ModalOverlay;
