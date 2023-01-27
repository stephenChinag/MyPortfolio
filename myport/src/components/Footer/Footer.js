import "./Footer.scss";
import logo from "../asset/logo-white.png";
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
								<a href="/" className="footers__link">
									Contact Me
								</a>
							</li>
							<li className="footers__item">
								<a href="/" className="footers__link">
									gitHub
								</a>
							</li>
							<li className="footers__item">
								<a href="/" className="footers__link">
									LinkedIn
								</a>
							</li>
							<li className="footers__item">
								<a href="/" className="footers__link">
									Facebook
								</a>
							</li>
							<li className="footers__item">
								<a href="/" className="footers__link">
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
						for his online resume
						<a href="/" alt="react" className="footers__link">
							&nbsp; React Js and Sass &nbsp;
						</a>
						.Copyright &copy; by &nbsp; Stephen Chinagorom However please not
						that the images used in this site are 80% art of mine and you can
						feed you eyes with more of my art in
					</p>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
