import { useState } from "react";
import Headings from "../componentss/Headings";
import "./Form.scss";

const Form = () => {
	const [note, setNote] = useState("");
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");

	const submitHandler = async (e) => {
		e.preventDefault();
		const response = await fetch("https://doobie-resume.onrender.com/email", {
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        note: note,
        fullName: fullName,
        email: email,
      }),
    });
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to authenticate");
      throw error;
    }
    console.log(responseData);
		console.log(fullName);
		console.log(email);
		console.log(note);
	};
	const noteimputeHandler = (e) => {
		setNote(e.target.value);
	};
	const nameChangeHandler = (e) => {
		setFullName(e.target.value);
	};
	const emailChangeHandler = (e) => {
		setEmail(e.target.value);
	};

	const onClickChange = () => {};
	return (
		<section className="section-book">
			<div className="roow">
				<div className="book">
					<div className="book__form">
						<form className="form" onSubmit={submitHandler}>
							<Headings text="START BOOKING" />
							<div className="form__group">
								<input
									className="form__input"
									type="text"
									placeholder="full name"
									id="name"
									onChange={nameChangeHandler}
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
									onChange={emailChangeHandler}
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
									onChange={noteimputeHandler}
									required
								></textarea>
								<label htmlFor="text" className="form__label">
									Note please
								</label>
							</div>

							<div className="form_group">
								<button className="subbtn" onClick={onClickChange}>
									Submit &rarr;
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Form;
