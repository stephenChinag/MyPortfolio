import "./Navigation.scss";

const Navigation = () => {
	return (
		<div className="navigation">
			<input
				id="navi-toggle"
				type="checkbox"
				className="navigation__checkbox"
			/>
			<label htmlFor="navi-toggle" className="navigation__button">
				<span className="navigation__icon"> &nbsp;</span>
			</label>
			<div className="navigation__background">&nbsp;</div>
			<nav className="navigation__nav">
				<ul className="navigation__list">
					<li className="navigation__item">
						<a className="navigation__link" href="/">
							About
						</a>
					</li>
					<li className="navigation__item">
						<a className="navigation__link" href="/">
							WorkExperience
						</a>
					</li>
					<li className="navigation__item">
						<a className="navigation__link" href="/">
							SKill
						</a>
					</li>
					<li className="navigation__item">
						<a className="navigation__link" href="/">
							Book now
						</a>
					</li>
					<li className="navigation__item">
						<a className="navigation__link" href="/">
							download Resume
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navigation;
