import "./App.css";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomeView from "./views/HomeView";
import SignupView from "./views/SignupView";
import LoginView from "./views/LoginView";
import GalleryView from "./views/GalleryView";
import AuthRoute from "./components/AuthRoute";
import AddPostView from "./views/AddPostView";
import PostView from "./views/PostView";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/" element={<HomeView />} />
				<Route path="/signup" element={<SignupView />} />
				<Route path="/login" element={<LoginView />} />
				<Route path="/post/:id" element={<PostView />} />
				<Route element={<AuthRoute />}>
					<Route path="/gallery" element={<GalleryView />} />
					<Route path="/addPost" element={<AddPostView />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
