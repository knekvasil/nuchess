import "./App.css";
import HomeView from "./views/HomeView";

import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/" element={<HomeView />} />
			</Routes>
		</div>
	);
}

export default App;
