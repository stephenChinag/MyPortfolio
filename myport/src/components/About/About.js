import "./About.scss";
import codeShoe from "../asset/codeShoe.jpg";
import stephenChinag from "../asset/stephen.jpg";
import imgInsta from "../asset/Img.jpg";

const About = () => {
	return (
		<main>
			<section className="section-about">
				<div className="u-center-text u-margin-bottom-8">
					<h2 className="heading-secondary">Exciting Facts About ME</h2>
				</div>
				<div className="roow">
					<div className="col-1-of-2">
						<h3 className="heading-tertiary">
							Your going to fall in Love with my Art
						</h3>
						<p className="paragraph">
							To pursue a career in an organization that is goal oriented with
							prospect for growth, challenges, increased responsibilities as
							well as career development.
						</p>

						<h3 className="heading-tertiary">
							Work with me in the best way you would imagine
						</h3>
						<p className="paragraph">
							I have been inspired by the Victory mission for several years and
							would welcome the opportunity to contribute to continued growth
							and success as the next Front End Developer. After completing a
							Bachelor of Computer Science in Computer Science and Programming
							from Federal University Birnin Kebbi, I am confident that my
							academic history and drive for creative solutions will bring a
							positive new facet to your team.
						</p>
						<a href="/" className="btn-text">
							my art &rarr;
						</a>
						<a href="/" className="btn-text">
							Github &rarr;
						</a>
					</div>
					<div className="col-1-of-2 composition">
						<div className="composition">
							<img
								src={codeShoe}
								alt="codeshoeStyle"
								className="composition__photo composition__photo--p1"
							/>
							<img
								src={imgInsta}
								alt=""
								className="composition__photo composition__photo--p2"
							/>
							<img
								src={stephenChinag}
								alt=" my profile pictur_e"
								className="composition__photo composition__photo--p3"
							/>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default About;
