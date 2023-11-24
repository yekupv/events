import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AppRouter from "./components/AppRouter";
import ScrollToTop from "./components/ScrollToTop";
function App() {
	return (
		<div className="wrapper">
			<Navbar />
			<AppRouter />
			<Footer />
			<ScrollToTop />
		</div>
	);
}

export default App;
