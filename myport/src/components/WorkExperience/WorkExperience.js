import "./WorkExperience.scss";
import work1 from "../asset/reactWork.jpg";
import work2 from "../asset/images.jpeg";
import work3 from "../asset/CementCompany.png";

const WorkExperience = () => {
	return (
		<main>
			<section className="section-work">
				<div className="u-center-text u-margin-bottom-8">
					<h2 className="heading-secondary">Work Experience</h2>
				</div>
				<div className="roow">
					<div className="work">
						<figure className="work__shape">
							<img src={work1} alt="algo work" className="work__image" />

							<figcaption className="work__caption"> algorism</figcaption>
						</figure>
						<div className="work__text">
							<h3 className="heading-tertiary ">
								Algorism Tech Innovative value
							</h3>
							<p>
								My experience working with algoridm tech innovative value was a
								nice piece whick kept the Good side of m act read for other
								challenges whick kept the Good side of m act read for other
								challenges whick kept the Good side of m act read for other
								challenges
							</p>
						</div>
					</div>
				</div>
				<div className="roow">
					<div className="work">
						<figure className="work__shape">
							<img src={work2} alt="algo work" className="work__image" />

							<figcaption className="work__caption"> F.U.B.K</figcaption>
						</figure>
						<div className="work__text">
							<h3 className="heading-tertiary ">
								Federal University Data center
							</h3>
							<p>
								My experience working with algoridm tech innovative value was a
								nice piece whick kept the Good side of m act read for other
								challenges whick kept the Good side of m act read for other
								challenges whick kept the Good side of m act read for other
								challenges
							</p>
						</div>
					</div>
				</div>
				<div className="roow">
					<div className="work">
						<figure className="work__shape">
							<img src={work3} alt="algo work" className="work__image" />

							<figcaption className="work__caption"> C.C.N.N</figcaption>
						</figure>
						<div className="work__text">
							<h3 className="heading-tertiary ">
								Cement Company of Northern nIGERIA
							</h3>
							<p>
								My experience working with algoridm tech innovative value was a
								nice piece whick kept the Good side of m act read for other
								challenges whick kept the Good side of m act read for other
								challenges whick kept the Good side of m act read for other
								challenges
							</p>
						</div>
					</div>
				</div>
				<div>
					<a href="/" className="btn btn-white btn-animated">
						Resume
					</a>
				</div>
			</section>
		</main>
	);
};
export default WorkExperience;
