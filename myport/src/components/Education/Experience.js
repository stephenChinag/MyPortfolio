const Experience = () => {
	return (
		<section className="section-about">
			<div className="u-center-text u-margin-bottom-8">
				<h2 className="heading-secondary">Education</h2>
			</div>
			<div className="roow">
				<div className="col-1-of-2">
					<h3 className="heading-tertiary">Federal University Birnin Kebbi</h3>
					<p className="paragraph">
						Bsc Computer Science
						<span>Second class upper</span>
					</p>

					<a href="www.fubk.com" className="btn-text">
						Alumin &rarr;
					</a>
				</div>
				<div className="col-1-of-2 composition">
					<div className="composition">
						<h3 className="heading-tertiary">Udemy Course </h3>
						<div className="paragraph">
							React Js complete udemy course and certification
							<ul>
								<li>Redux</li>
								<li>React Hooks</li>
								<li>useReducer </li>
								<li>React Router</li>
								<li>NextJS</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Experience;
