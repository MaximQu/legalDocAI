import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import FeedBack from "./components/FeedBack";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
				<Services />
				<Testimonials />
				<FeedBack />
			</main>
			<Footer />
		</>
	);
}

export default App;
