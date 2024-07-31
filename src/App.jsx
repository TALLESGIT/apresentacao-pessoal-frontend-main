import About from "./components/About";
import Habilities from "./components/Habilities";
import Header from "./components/Header";
import Project from "./components/Projects";
import Footer from "./components/footer";

function App() {
	return (
		<div className="p-10">
			<Header />
			<About />
			<Habilities />
			<Project />
			<Footer />
		</div>
	);
}

export default App;
