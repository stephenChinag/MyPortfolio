import "./WorkExperience.scss";
import work1 from "../asset/reactWork.jpg";
import work2 from "../asset/images.jpeg";
import work3 from "../asset/CementCompany.png";
import work4 from "../asset/dataCenter.png";
import resume from "../asset/Myresume.pdf";
import Headings from "../componentss/Headings";
import Button from "../Button";
const WorkExperience = () => {
	return (
		<main>
			<section className="section-work">
				<Headings text="WORK EXPERIENCE" />
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
							<ul>
								<li>
									Work hand-in-hand with senior developers and customer user
									groups to create robust software solutions.{" "}
									<a href="www.taskprox.com" className=" taskproxSoluton">
										taskprox{" "}
									</a>
								</li>
								<li> Create and reuse of components with Reactjs</li>
								<li>
									Writes reports regarding the state of software under
									development and Works on minor bug issues
								</li>
								<li> Attends daily developer meetings </li>
								<li>
									Analyses user needs and software requirements to inform system
									design
								</li>
								<li>
									Conducts manual tests and sanity check with proper
									documentation
								</li>
							</ul>
							<span className="stack"> Reactjs</span>
							<span className="stack"> React-Router</span>
							<span className="stack"> React + TypeScript</span>
							<span className="stack"> React unitTesting</span>
							<span className="stack"> deploying React</span>
							<span className="stack"> Redux ToolKit</span>

							<span className="stack"> NextJs</span>
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
							<ul>
								<li>
									Your bullet statements should be in proper tense, using –ed
									for past experiences and present tenses Utilized HTML, CSS,
									and JavaScript to create responsive landing pages for clients
								</li>
								<li>
									Turn design page and specific components into HTML, CSS and
									JavaScript
								</li>
								<li> Work on Data centre with senior IT officer </li>
								<li>
									Work on physical side of networking such as mounting of nano
									stations
								</li>
								<li>Vlan configurations and configuration of switches </li>
							</ul>

							<span className="stack"> HTML/CSS</span>
							<span className="stack"> JavaScript</span>
							<span className="stack"> Packet Tracer</span>
							<span className="stack"> IOT</span>
							<span className="stack"> Router-config</span>
							<span className="stack"> simulator tools</span>
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
								My experience working with algorism tech innovative value was a
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
							<img src={work4} alt="algo work" className="work__image" />

							<figcaption className="work__caption"> Divine Favour</figcaption>
						</figure>
						<div className="work__text">
							<h3 className="heading-tertiary ">Personal Projects </h3>
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
					<Button href={resume} text="RESUME" download="resume" />
				</div>
			</section>
		</main>
	);
};
export default WorkExperience;
