import React, { useEffect, useState } from "react";
import './faq.css';
const FaqItem = ({ props, index }) => {
	const [show, setshow] = useState(false);

	useEffect(() => {
		if (index === 0) {
			setshow(true);
		}
	}, [index]);

	const handleClick = () => {
		setshow((sh) => !sh);
	};
    
	return (
		<div className="faq-box">
			<div className="que" onClick={handleClick}>
				<button className= {show ? 'rotate' : ' '}> > </button>
				<div>{props.question}</div>
			</div>
			{show && <div className="ans">{props.answer}</div>}
		</div>
	);
};

export default FaqItem;
