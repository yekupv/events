import "./Buttons.scss";
const Button = ({ variant, children, ...props }) => {
	return (
		<button
			{...props}
			className={variant == "secondary" ? "secondary" : "primary"}
		>
			{children}
		</button>
	);
};

export default Button;
