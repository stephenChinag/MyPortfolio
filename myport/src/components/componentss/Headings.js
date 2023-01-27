import "./Headings.scss";

const Headings = (props) => {
	return (
		<div className="u-center-text u-margin-bottom-8">
			<h2 className="heading-secondary">{props.text}</h2>
		</div>
	);
};

export default Headings;
