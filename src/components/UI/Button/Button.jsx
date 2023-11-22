import "./Buttons.scss";
const Button = ({ variant, children, active, ...props }) => {
	// Define the default class for the button
	let buttonClass = variant === "secondary" ? "secondary" : "primary";
	let disabled = props.disabled;
	if (disabled) {
		buttonClass += " disabled";
	}
	// If the 'active' prop is true, add 'active_date' class
	if (active) {
		buttonClass += " active_date";
	}

	return (
		<button {...props} className={buttonClass}>
			{children}
		</button>
	);
};

export default Button;
