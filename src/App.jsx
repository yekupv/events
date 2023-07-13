import { useState } from "react";
import "./App.css";
import Main from "./pages/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Events from "./pages/Events/Events";
import AppRouter from "./components/AppRouter";
function App() {
	return (
		<div className='wrapper'>
			<Navbar />
			<AppRouter />
			<Footer />
		</div>
	);
}

export default App;
