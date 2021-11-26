import { Children, Component, useEffect, useState } from "react";
import { Navigate, Route, Outlet } from "react-router-dom";
import { isAuthenticated } from "../services/authService";
import LoginView from "../views/LoginView";

function AuthRoute() {
	const user = isAuthenticated();

	return user ? <Outlet /> : <LoginView />;
}

export default AuthRoute;
