import "./Button.scss";

const Button = (props) => {
	return (
		<div>
			<a href="/" className="btn btn-white btn-animated">
				{props.title}
			</a>
		</div>
	);
};
export default Button;
