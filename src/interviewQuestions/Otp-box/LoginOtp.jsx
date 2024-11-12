import React, { useEffect, useRef, useState } from "react";
import "./loginbox.css";

const LoginOtp = () => {
	const [otpbox, setOtpBox] = useState(["", "", "", ""]);
	const inputREf = useRef([]);

	useEffect(() => {
		inputREf.current[0]?.focus();
	}, []);

	const handleChangeInput = (e, i) => {
		const value = e.target.value.replace(/\D/, "");
		setOtpBox((prev) => {
			const newOtp = [...prev];
			newOtp[i] = value;
			return newOtp;
		});
		if (value && i < 3) {
			inputREf.current[i + 1]?.focus();
		}
	};

	const handleKeyDown = (e, i) => {
		if (e.key === "Backspace" && !otpbox[i] && i > 0) {
			inputREf.current[i - 1]?.focus();
		}
	};

	const handlePaset = (e) => {
		const data = e.clipboardData.getData("text");
		if(!Number(data) || data.length !== otpbox.length) return;
        const getCode = data.split('');
        setOtpBox(getCode);
        inputREf.current[otpbox.length - 1]?.focus();
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("otp", otpbox.join(""));

		for (const [key, value] of formData.entries()) {
			console.log(`${key}: ${value}`);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="container">
			<div className="Login-container">
				{otpbox.map((value, i) => (
					<input
						type="text"
						maxLength={1}
						key={i}
						value={value}
						onChange={(e) => handleChangeInput(e, i)}
						onKeyDown={(e) => handleKeyDown(e, i)}
						onPaste={handlePaset}
						ref={(el) => (inputREf.current[i] = el)}
					/>
				))}
			</div>
			<button type="submit">Submit</button>
		</form>
	);
};

export default LoginOtp;
