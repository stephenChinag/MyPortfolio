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
					<span className="heading-primary-main">ONline Resume </span>
					<span className="heading-primary-sub">Desinged by stephenChinag</span>
				</h1>
				<div className="">
					<Button href="/" text="hire me" />
				</div>
			</div>
		</header>
	);
};
export default Header;
