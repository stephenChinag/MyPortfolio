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
							“Over the years, I have built up a diverse set of skills, qualities, and experience that are a match for this job description. I have experience in managing lots of varied tasks, collaborating with others as part of a team, and of communicating positively with customers and clients.

 

I am the type of person who will never shy away from difficult challenges. I am a fast learner which means you won’t have to spend time constantly supervising me, and I will always embrace changes positively to ensure your company stays at the forefront of this industry.

If you hire me, I will take responsibility for my ongoing development and I will act as a positive role model for the business in everything I do!”
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
