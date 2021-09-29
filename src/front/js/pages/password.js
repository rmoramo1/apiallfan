import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

export const Password = () => {
	const { store, actions } = useContext(Context);
	const [mailCrear, setMailCrear] = useState("");
	const [passwordCrear, setPasswordCrear] = useState("");
	const [auth, setAuth] = useState(false);

	const actualizar = e => {
		e.preventDefault();
		const body = { mail: mailCrear, password: passwordCrear };
		console.log(body);

		fetch("https://3001-blush-pigeon-j6j7g7fg.ws-us04.gitpod.io/api/cambioContrasena", {
			method: "POST",
			body: JSON.stringify(body),
			headers: { "Content-Type": "application/json" }
		})
			.then(res => res.json())
			.then(data => {
				sessionStorage.setItem("my_token", data.token);
				console.log(sessionStorage);
				alert("Tu contraseña se actualizado con exito");
				setAuth(true);
			})
			.catch(err => console.log(err));
	};
	return (
		<div className="container mt-5">
			<div className="row-lg">
				<div className="container">
					<div className="row mb-5">
						<div className="col text-center mt-9">
							<h1>Cambio de Contraseña</h1>
						</div>
					</div>
				</div>
				<form onSubmit={actualizar}>
					<div className="col-12">
						<div className="input-group mb-6">
							<div className="input-group-prepend">
								<span className="input-group-text">Correo</span>
							</div>
							<input
								type="mail"
								className="form-control"
								placeholder="Ingresa tu Correo Electronico"
								onChange={e => setMailCrear(e.target.value)}
							/>
						</div>
						<br />
						<div className="input-group mb-6">
							<div className="input-group-prepend">
								<span className="input-group-text">Contraseña</span>
							</div>
							<input
								type="password"
								pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
								className="form-control"
								placeholder="Ingresa tu nueva contraseña"
								onChange={e => setPasswordCrear(e.target.value)}
							/>
						</div>
						<div className="col-12">
							<span className="badge badge-pill badge-light">
								*La contraseña debe contener 8 o más caracteres de al menos un número y una letra
								mayúscula y minúscula
							</span>
						</div>
						<br />
						<div className="input-group mb-6">
							<div className="input-group-prepend">
								<span className="input-group-text">Confirma Contraseña</span>
							</div>
							<input type="text" className="form-control" placeholder="Confirma tu nueva contraseña" />
						</div>
						<br />
						<div className="container">
							<div className="row mt-5">
								<div className="col text-center">
									<button type="submit" className="btn btn-danger">
										Cambiar contraseña
									</button>
								</div>
							</div>
						</div>
					</div>
				</form>{" "}
			</div>
		</div>
	);
};
