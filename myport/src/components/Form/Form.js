import "./Form.scss";

const Form = () => {
	return (
		<section className="section-book">
			<div className="roow">
				<div className="book">
					<div className="book__form">
						<form className="form">
							<div className=" u-margin-bottom-8">
								<h2 className="heading-secondary">Start booking</h2>
							</div>
							<div className="form__group">
								<input
									className="form__input"
									type="text"
									placeholder="full name"
									id="name"
									required
								></input>
								<label htmlFor="name" className="form__label">
									Full Name
								</label>
							</div>
							<div className="form__group">
								<input
									className="form__input"
									type="email"
									placeholder="Email Address"
									id="email"
									required
								></input>
								<label htmlFor="email" className="form__label">
									Email address
								</label>
							</div>
							<div className="form__group">
								<textarea
									className="form__input"
									type="text"
									placeholder="please enter text"
									id="text"
									required
								></textarea>
								<label htmlFor="text" className="form__label">
									Note please
								</label>
							</div>
							<div className="form__radio-group">
								<input
									className="form__radio-input"
									type="radio"
									placeholder="Email Address"
									id="programmer"
									name="size"
									required
								></input>
								<label htmlFor="programmer" className="form__radio-label">
									<span className="form__radio-button"></span>
									Programmer
								</label>
							</div>
							<div className="form__radio-group">
								<input
									className="form__radio-input"
									type="radio"
									placeholder="Email Address"
									id="photographer"
									name="size"
									required
								></input>
								<label htmlFor="photographer" className="form__radio-label">
									<span className="form__radio-button"></span>
									Photographer
								</label>
							</div>
							<div className="form_group">
								<button className="subbtn">Submit &rarr;</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Form;
