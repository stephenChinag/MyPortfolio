import "./Footer.scss";

import manuel from "../asset/art.jpg";

const Footer = () => {
	return (
		<footer className="footers">
			<div className="footers__logo-box">
				<img src={manuel} alt="full-logo" className="footers__logo" />
			</div>
			<div className="roow">
				<div className="col-1-of-2">
					<div className="footers__navigation">
						<ul className="footers__list ">
							<li className="footers__item">
								<a
									href="https://github.com/stephenChinag"
									className="footers__link"
								>
									gitHub
								</a>
							</li>
							<li className="footers__item">
								<a
									href="https://www.linkedin.com/in/owoamanam-stephen-32053922a/"
									className="footers__link"
								>
									LinkedIn
								</a>
							</li>
							<li className="footers__item">
								<a
									href="https://twitter.com/Stephenchinagor?t=Ftg1l7E1cKfezsLbIPc9nQ&s=08"
									className="footers__link"
								>
									twitter
								</a>
							</li>
							<li className="footers__item">
								<a
									href="https://www.instagram.com/black_conceptu_s/?igshid=ZmZhODViOGI%3D"
									className="footers__link"
								>
									instagram
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="col-1-of-2">
					<p className="footers__copyright">
						Built by
						<a href="/" alt="stephen" className="footers__link">
							&nbsp; StephenChinag &nbsp;
						</a>
						for his online resume &nbsp;<strong> React Js and Sass</strong>{" "}
					</p>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
