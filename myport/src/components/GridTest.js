import "./gridTest.scss";

const GridTest = () => {
	return (
		<section className="grid-test">
			<div className="roow">
				<div className="col-1-of-2">col 1of 2</div>
				<div className="col-1-of-2">col 1of 2</div>
			</div>
			<div className="roow">
				<div className="col-1-of-3">col 1of 3</div>
				<div className="col-1-of-3">col 1of 3</div>
				<div className="col-1-of-3">col 1of 3</div>
			</div>
			<div className="roow">
				<div className="col-1-of-3">col 1of 3</div>
				<div className="col-2-of-3">col 2of 3</div>
			</div>
			<div className="roow">
				<div className="col-1-of-4">col 1of 4</div>
				<div className="col-1-of-4">col 1of 4</div>
				<div className="col-1-of-4">col 1of 4</div>
				<div className="col-1-of-4">col 1of 4</div>
			</div>
			<div className="roow">
				<div className="col-1-of-4">col 1of 4</div>
				<div className="col-1-of-4">col 1of 4</div>
				<div className="col-2-of-4">col 2of 4</div>
			</div>
			<div className="roow">
				<div className="col-1-of-4">col 1of 4</div>
				<div className="col-3-of-4">col 3of 4</div>
			</div>

			<div className="footers-video">
				<video className="footers-video_content" autoPlay muted loop>
					<source src={aboutt} type="video/mp4" />
					Your browser is not supported
				</video>
			</div>
		</section>
	);
};
export default GridTest;
