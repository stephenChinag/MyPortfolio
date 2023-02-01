import { Fragment } from "react";
import "./App.scss";
import About from "./components/About/About";

import Header from "./components/Header/Header";
import Education from "./components/Education/Education";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<Fragment>
			<Header />
			<About />
			<Education />
			<WorkExperience />
			<Form />
			<Footer />
		</Fragment>
	);
}

export default App;
