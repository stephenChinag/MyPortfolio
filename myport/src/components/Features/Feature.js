import Headings from "../componentss/Headings";
import Header from "../Header/Header";
import "./feature.scss";
const Feauture = () => {
	return (
		<section className="section-features">
			<Headings text=" this is my stack" />
			<div className="roow">
				<div className="col-1-of-4">
					<div className=" feature-box">
						<h3 className="feature-box__heading u-margin ">HTML</h3>
						<p className="feature-box__text">
							You got such a number: 6 In Listing 8.3, an integer variable, num,
							is declared in line 6. Line 8 of Listing 8.3 prints out two eger
							variable num is initialized in the first expression of the
						</p>
					</div>
				</div>
				<div className="col-1-of-4">
					<div className=" feature-box">
						<h3 className="feature-box__heading u-margin ">CSS</h3>
						<p className="feature-box__text">
							You got such a number: 6 In Listing 8.3, an integer variable, num,
							is declared in line 6. Line 8 of Listing 8.3 prints out two eger
							variable num is initialized in the first expression of the
						</p>
					</div>
				</div>
				<div className="col-1-of-4">
					<div className=" feature-box">
						<h3 className="feature-box__heading u-margin ">JavaScript</h3>
						<p className="feature-box__text">
							You got such a number: 6 In Listing 8.3, an integer variable, num,
							is declared in line 6. Line 8 of Listing 8.3 prints out two eger
							variable num is initialized in the first expression of the
						</p>
					</div>
				</div>
				<div className="col-1-of-4">
					<div className=" feature-box">
						<h3 className="feature-box__heading u-margin ">ReactJs</h3>
						<p className="feature-box__text">
							You got such a number: 6 In Listing 8.3, an integer variable, num,
							is declared in line 6. Line 8 of Listing 8.3 prints out two eger
							variable num is initialized in the first expression of the
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Feauture;
