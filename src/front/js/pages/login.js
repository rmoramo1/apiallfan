import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [mail, setMail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);
	const [auth, setAuth] = useState(false);

	const enviar = e => {
		e.preventDefault();
		const body = { mail: mail, password: password };
		console.log(body);
		fetch("http://192.168.20.220:3001/api/user", {
			method: "POST",
			body: JSON.stringify(body),
			headers: { "Content-Type": "application/json" }
		})
			// .then(res => res.json())
			.then(response => {
				if (!response.ok) {
					setError(true);
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then(data => {
				actions.changename(data.username);
				console.log(data);
				sessionStorage.setItem("my_token", data.token);
				setAuth(true);
				successfulLogin();
			})
			.catch(err => console.log(err));
	};

	function successfulLogin() {
		let btnLog = document.getElementById("btnLogOut");
		btnLog.classList.remove("d-none");
		console.log(btnLog);
		alert("has ingresado correctamente");
	}
	return (
		<div className="container mt-5">
			<div className="tab-content" id="nav-tabContent">
				<div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
					<div className="col-12 text-center">
						<h2 className="col-12">Login</h2>
					</div>
					{error ? (
						<div className="alert alert-naranjaContraste text-center" role="alert">
							Correo Electrónico o Contraseña erróneos
						</div>
					) : null}
					<form onSubmit={enviar}>
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text" id="basic-addon1">
									<i className="fas fa-at" />
								</span>
							</div>
							<input
								id="mail"
								onChange={e => setMail(e.target.value)}
								name="mail"
								type="text"
								className="form-control"
								placeholder="Mail"
								aria-label="Mail"
								aria-describedby="basic-addon1"
							/>
						</div>
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text" id="basic-addon1">
									<i className="fas fa-key" />
								</span>
							</div>
							<input
								type="password"
								pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
								onChange={e => setPassword(e.target.value)}
								id="password"
								name="password"
								className="form-control"
								placeholder="Password"
								aria-label="Username"
								aria-describedby="basic-addon1"
							/>
						</div>
						<div className="col-12 mb-3">
							<span className="badge badge-pill badge-light">
								*La contraseña debe contener 8 o más caracteres de al menos un número y una letra
								mayúscula y minúscula
							</span>
						</div>
						<div className="col-12 text-center">
							<button type="submit" className="btn btn-primary">
								Ingresar
							</button>
						</div>
					</form>
					{auth ? <Redirect to="/" /> : null}
					<div className="col-12 text-center mt-5">
						<Link to="/password">Cambiar contraseña</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
