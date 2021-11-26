import "./App.css";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomeView from "./views/HomeView";
import SignupView from "./views/SignupView";
import LoginView from "./views/LoginView";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/" element={<HomeView />} />
				<Route path="/signup" element={<SignupView />} />
				<Route path="/login" element={<LoginView />} />
			</Routes>
		</div>
	);
}

export default App;
