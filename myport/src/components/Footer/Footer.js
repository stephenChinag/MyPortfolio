import "./Footer.scss";
import logo from "../asset/logo-white.png";

const Footer = () => {
	return (
		<footer className="footers">
			<div className="footers__logo-box">
				<img src={logo} alt="full-logo" className="footers__logo" />
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
							StephenChinag
						</a>
						for his online resume
						<a href="/" alt="react" className="footers__link">
							React Js and Sass
						</a>
						.Copyright &copy; by Stephen Chinagorom. you are 100% allowed to use
						this webpage for both personal and and comercial use but NOT to
						claim is as you own design. A credit to the original author, Stephen
						Chinagorom
					</p>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
