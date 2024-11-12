import React, { useState} from "react";
import "./Toast.css";

const ToastContainer = () => {
	const [toasts, setToasts] = useState([]);
	const [timeoutIds, setTimeoutIds] = useState({});

	const handleClose = (id) => {
        if(timeoutIds[id]) {
            clearTimeout(timeoutIds[id]);
            delete timeoutIds[id];
        }
		setToasts((toasts) =>  toasts.filter((item) => item.id !== id));
	};

	const handleToast = (msg, type) => {
		const id = new Date().getTime();
		const newToast = [...toasts, { id, msg, type }];
		setToasts(newToast);
		const timeoutId = setTimeout(() => handleClose(id), 5000);
		console.log('timeoutId', timeoutId);
		setTimeoutIds((prevIds) => ({ ...prevIds, [id]: timeoutId }));
	};

	setTimeout(() => {
		console.log(timeoutIds);
	}, 7000)

	return (
		<div className="container">
			<div className="toast-container">
				{toasts.map((toast) => {
					return (
						<div className={`toast ${toast.type}`}>
							{toast.msg}{" "}
							<span onClick={() => handleClose(toast.id)}>X</span>
						</div>
					);
				})}
			</div>
			<div className="btn-container">
				<button onClick={() => handleToast("Sucess", "sucess")}>
					Success Toast
				</button>
				<button onClick={() => handleToast("Warning", "warning")}>
					Warning Toast
				</button>
				<button onClick={() => handleToast("Info", "info")}>
					Info{" "}
				</button>
				<button onClick={() => handleToast("Error", "error")}>
					Error Toast
				</button>
			</div>
		</div>
	);
};

export default ToastContainer;
