import "./Button.scss";

const Button = (props) => {
	return (
		<div>
			<a
				href={props.href}
				className="btn btn-white btn-animated"
				download={props.download}
			>
				{props.text}
			</a>
		</div>
	);
};
export default Button;
