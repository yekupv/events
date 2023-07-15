import React from "react";
import images from "../../../assets/images/images";
import "./BackButton.scss";
const BackButton = ({ children, ...props }) => {
	return (
		<button {...props} className='backButton'>
			<img src={images.goBackArrow} alt='goBackArrow' />
			{children}
		</button>
	);
};

export default BackButton;
