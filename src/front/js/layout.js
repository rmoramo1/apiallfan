import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/pulxesIndex";
import { PulxesIndex } from "./pages/pulxesIndex";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { Password } from "./pages/password";
import { Registro } from "./pages/registro";
import { CrearCuenta } from "./pages/crearCuenta";
import { Login } from "./pages/login";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/pulxesIndex">
							<PulxesIndex />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/password">
							<Password />
						</Route>
						<Route exact path="/registro">
							<Registro />
						</Route>
						<Route exact path="/crearCuenta">
							<CrearCuenta />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
