import "./Header.scss";
import logoWhite from "../asset/Rlogo.png";
import Button from "../Button";

const Header = (props) => {
	return (
		<header className="header">
			<div className="logo-box">
				<img src={logoWhite} alt="myLogo" className="logo" />
			</div>
			<div className="header-text-box">
				<h1 className="heading-primary">
					<span className="heading-primary-sub"> stephen Owoamanam</span>
					<span className="heading-primary-main">ONline Resume </span>
				</h1>
				<div className="">
					<Button
						href="https://drive.google.com/file/d/1FWHF6t-OaK71QlSkXTMbLKdxFhSgclzj/view?usp=sharing"
						download="resmume"
						text="resume"
					/>
				</div>
			</div>
		</header>
	);
};
export default Header;
