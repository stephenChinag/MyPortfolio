import "./About.scss";
import codeShoe from "../asset/codeShoe.jpg";
import stephenChinag from "../asset/stephen.jpg";
import manuel from "../asset/Img.jpg";
import Anchor from "../componentss/anchor";
import Headings from "../componentss/Headings";

const About = (props) => {
	return (
		<main>
			<section className="section-about">
				<Headings text="Exciting Facts About ME" />
				<div className="roow">
					<div className="col-1-of-2">
						<h3 className="heading-tertiary">Career and Objective</h3>
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

						<Anchor
							href="https://www.instagram.com/black_conceptu_s/?igshid=ZmZhODViOGI%3D"
							className="btn-text"
							text="my art &rarr;"
						/>
						<Anchor
							href="https://github.com/stephenChinag"
							className="btn-text"
							text="Github &rarr;"
						/>
					</div>
					<div className="col-1-of-2 composition">
						<div className="composition">
							<img
								src={codeShoe}
								alt="codeshoeStyle"
								className="composition__photo composition__photo--p1"
							/>
							<img
								src={manuel}
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
