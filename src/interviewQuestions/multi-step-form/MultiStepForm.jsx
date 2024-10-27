import React, { useState } from "react";
import "./MultiStep.css";

const MultiStepForm = () => {
	const data = [
		{
			id: "name",
			label: "Name",
			inputType: "text",
			placeholder: "Enter name",
			buttonName: "next",
		},
		{
			id: "email",
			label: "Email",
			inputType: "email",
			placeholder: "Enter Email",
			buttonName: "next",
		},
		{
			id: "dob",
			label: "DOB",
			inputType: "date",
			placeholder: "",
			buttonName: "next",
		},
		{
			id: "password",
			label: "Password",
			inputType: "password",
			placeholder: "password",
			buttonName: "submit",
		},
	];

	const [forms, setForms] = useState(data);
	const [index, setIndex] = useState(0);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		dob: "",
		password: "",
	});
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (index === forms.length - 1) {
			setIsSubmitted((is) => !is);
		} else {
			setIndex((idx) => idx + 1);
		}
	};
	const handleBack = (event) => {
		event.preventDefault();
		setIndex((idx) => idx - 1);
	};
	const handleInputChange = (event) => {
		const id = event.target.id;
		const value = event.target.value;
		const copyData = { ...formData };
		copyData[id] = value;
		setFormData(copyData);
	};
	return (
		<form onSubmit={handleSubmit}>
			{isSubmitted ? (
				<div>
					<h2>Submitted data</h2>
					<span> Name: {formData.name}</span> <br />
					<span> Email: {formData.email}</span> <br />
					<span> Dob: {formData.dob}</span> <br />
					<span> Password: {formData.password}</span>
				</div>
			) : (
				<div className="form-page">
					<h3 className="heading">Multi-step Form</h3>
					<div>
						{index > 0 && (
							<a href="/" onClick={handleBack} className="btn">
								Back
							</a>
						)}
						<div className="input-name">
							<label htmlFor={forms[index].id}>
								{forms[index].label}
							</label>
							<input
								className="input-name"
								id={forms[index].id}
								value={formData[forms[index].id]}
								type={forms[index].inputType}
								placeholder={forms[index].placeholder}
								onChange={handleInputChange}
							/>
							<button className="next-btn">
								{forms[index].buttonName}
							</button>
						</div>
					</div>
				</div>
			)}
		</form>
	);
};

export default MultiStepForm;
