import React from "react";
import "./Buttons.scss";
const Button = ({ children, ...props }) => {
	return (
		<button {...props} className='myBtn '>
			{children}
		</button>
	);
};

export default Button;
