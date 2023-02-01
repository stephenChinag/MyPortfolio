import Anchor from "../componentss/anchor";
import Headings from "../componentss/Headings";

const Experience = () => {
	return (
		<section className="section-about">
			<Headings text="EDUCATION" />
			<div className="roow">
				<div className="col-1-of-2">
					<h3 className="heading-tertiary">Federal University Birnin Kebbi</h3>
					<p className="paragraph">
						Bsc Computer Science
						<span>
							<i className="grade">
								<strong>( Second class upper </strong>{" "}
							</i>
						</span>
					</p>
					<Anchor
						href="https://fubk.edu.ng/"
						className="btn-text"
						text="	an Alumins Of &rarr;"
					/>
				</div>
				<div className="col-1-of-2 composition">
					<div className="composition">
						<h3 className="heading-tertiary">Udemy Course </h3>
						<div className="paragraph">
							React Js complete udemy course and certification
							<ul>
								<li>Redux</li>
								<li>React Hooks</li>
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
