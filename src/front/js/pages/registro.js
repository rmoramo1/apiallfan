import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

export const Registro = () => {
	const { store, actions } = useContext(Context);
	const [nombreCrear, setNombreCrear] = useState("");
	const [pulxeCrear, setPulxeCrear] = useState("");
	const [categoriaCrear, setCategoriaCrear] = useState("");
	const [cantonCrear, setCantonCrear] = useState("");
	const [distritoCrear, setDistritoCrear] = useState("");
	const [provinciaCrear, setProvinciaCrear] = useState("");
	const [descripcionCrear, setDescripcionCrear] = useState("");
	const [experienciaCrear, setExperienciaCrear] = useState("");
	const [numeroCrear, setNumeroCrear] = useState("");
	const [passwordCrear, setPasswordCrear] = useState("");
	const [auth, setAuth] = useState(false);

	const crear = e => {
		e.preventDefault();
		const body = {
			nombre: nombreCrear,
			pulxe: pulxeCrear,
			categoria: categoriaCrear,
			canton: cantonCrear,
			distrito: distritoCrear,
			provincia: provinciaCrear,
			descripcion: descripcionCrear,
			experiencia: experienciaCrear,
			numero: numeroCrear,
			password: String(passwordCrear)
		};
		console.log(body);
		console.log(body.password);

		fetch("https://3001-magenta-aphid-u46yru72.ws-us04.gitpod.io/api/pulxes", {
			method: "POST",
			body: JSON.stringify(body),
			headers: { "Content-Type": "application/json" }
		})
			.then(res => res.json())
			.then(data => {
				sessionStorage.setItem("my_token", data.token);
				console.log(sessionStorage);
				alert("Tu cuenta se ha creado con exito, Bienvenido");
				setAuth(true);
			})
			.catch(err => console.log(err));
	};
	return (
		<div className="container mt-5">
			<div className="col text-center mt-9">
				<h1>Publicar mi servicio</h1>
			</div>
			<div>
				<div className="col text-left mt-9">
					<h4>Datos de contacto</h4>
				</div>
				<form onSubmit={crear}>
					<div className="input-group mb-3">
						<span className="input-group-text" id="nombre">
							Nombre completo
						</span>
						<input
							type="text"
							required
							onChange={e => setNombreCrear(e.target.value)}
							className="form-control"
							placeholder="Nombre y apellidos"
							aria-label="nombre"
							aria-describedby="nombre"
						/>
					</div>
					<div className="input-group mb-3 col-6 float-left p-0">
						<span className="input-group-text" id="numero">
							Número
						</span>
						<input
							type="number"
							required
							minLength="8"
							onChange={e => setNumeroCrear(e.target.value)}
							className="form-control"
							placeholder="numero de celuar"
							aria-label="numero"
							aria-describedby="numero"
						/>
					</div>
					<div className="input-group mb-3 col-5 offset-1 float-left p-0">
						<span className="input-group-text" id="experiencia">
							Años de Experiencia
						</span>
						<input
							type="number"
							required
							onChange={e => setExperienciaCrear(e.target.value)}
							className="form-control"
							placeholder="Años cumplidos de brindar el servicio"
							aria-label="experiencia"
							aria-describedby="experiencia"
						/>
					</div>
					<div className="col-12 float-left text-left mt-9">
						<h4>Datos del servicio</h4>
					</div>
					<div className="input-group mb-3 col-6 float-left p-0">
						<label className="input-group-text">Categoría</label>
						<select
							className="form-control"
							id="categoria"
							required
							value={categoriaCrear}
							onChange={e => setCategoriaCrear(e.target.value)}
							defaultValue={"DEFAULT"}>
							<option value="DEFAULT">Seleccione una categoría</option>
							<option value="Hogar">Hogar</option>
							<option value="Mascotas">Mascotas</option>
							<option value="Mandados">Mandados</option>
							<option value="Mecánica">Mecánica</option>
							<option value="Fitness">Fitness</option>
							<option value="Belleza">Belleza</option>
						</select>
					</div>
					<div className="input-group mb-3 col-5 offset-1 float-left p-0">
						<label className="input-group-text">Pulxe</label>
						<select
							className="form-control"
							id="pulxe"
							required
							value={pulxeCrear}
							onChange={e => setPulxeCrear(e.target.value)}>
							<option value="DEFAULT">Seleccione un Pulxe</option>
							<option value="Remodelación">Remodelación</option>
							<option value="Pintura">Pintura</option>
							<option value="Pisos">Pisos</option>
							<option value="Enchapes">Enchapes</option>
							<option value="Goteras">Goteras</option>
							<option value="Jardín">Jardín</option>
						</select>
					</div>
					<div className="input-group mb-3">
						<span className="input-group-text" id="descripcion">
							Descripción
						</span>
						<textarea
							type="text"
							rows="5"
							required
							maxLength="200"
							onChange={e => setDescripcionCrear(e.target.value)}
							className="form-control"
							placeholder="Describa el servicio que usted brinda *máximo 200 caracteres"
							aria-label="Username"
							aria-describedby="descripcion"
						/>
					</div>
					<div className="col-12 text-right">
						<span id="cantidadLetras" className="badge badge-pill badge-light">
							Llevas {descripcionCrear.length} Caracteres{" "}
						</span>
					</div>
					<div className="col-12 float-left text-left mt-9">
						<h4>Ubicación del servicio</h4>
					</div>

					<div className="input-group mb-3 col-4 float-left p-0">
						<label className="input-group-text">Provincia</label>
						<select
							className="form-control"
							id="provincia"
							required
							value={provinciaCrear}
							onChange={e => setProvinciaCrear(e.target.value)}>
							<option value="DEFAULT">Seleccione</option>
							<option value="SanJosé">San José</option>
							<option value="Alajuela">Alajuela</option>
							<option value="Heredia">Heredia</option>
							<option value="Cartago">Cartago</option>
							<option value="Puntarenas">Puntarenas</option>
							<option value="Limón">Limón</option>
							<option value="Guanacaste">Guanacaste</option>
						</select>
					</div>

					<div className="input-group mb-3 col-3 offset-1 float-left p-0">
						<label className="input-group-text">Cantón</label>
						<select
							className="form-control"
							id="canton"
							required
							value={cantonCrear}
							onChange={e => setCantonCrear(e.target.value)}>
							<option value="DEFAULT">Seleccione</option>
							<option value="SanJosé">San José</option>
							<option value="Escazú">Escazú</option>
							<option value="Desamparados">Desamparados</option>
							<option value="Puriscal">Puriscal</option>
							<option value="Tarrazú">Tarrazú</option>
							<option value="Aserrí">Aserrí</option>
							<option value="Mora">Mora</option>
							<option value="Goicoechea">Goicoechea</option>
							<option value="Santa Ana">Santa Ana</option>
							<option value="Alajuelita">Alajuelita</option>
							<option value="Vázquez de Coronado">Vázquez de Coronado</option>
							<option value="Acosta">Acosta</option>
							<option value="Tibás">Tibás</option>
							<option value=" Moravia"> Moravia</option>
							<option value="Montes de Oca">Montes de Oca</option>
							<option value="Turrubares">Turrubares</option>
							<option value="Dota">Dota</option>
							<option value="Curridabat">Curridabat</option>
							<option value="Pérez Zeledón">Pérez Zeledón</option>
							<option value="León Cortés Castro">León Cortés Castro</option>
						</select>
					</div>

					<div className="input-group mb-3 col-3 offset-1 float-left p-0">
						<label className="input-group-text">Distrito</label>
						<select
							className="form-control"
							id="distrito"
							required
							value={distritoCrear}
							onChange={e => setDistritoCrear(e.target.value)}>
							<option value="DEFAULT">Seleccione</option>
							<option value="Colón">Colón</option>
							<option value="Guayabo">Guayabo</option>
							<option value="Tabarcia">Tabarcia</option>
							<option value="Piedras Negras">Piedras Negras</option>
							<option value="Picagres">Picagres</option>
							<option value="Jaris">Jaris</option>
							<option value="Quitirrisí">Quitirrisí</option>
						</select>
					</div>

					<div className="input-group mb-3">
						<span className="input-group-text" id="basic-addon1">
							Password
						</span>
						<input
							type="password"
							minLength="8"
							pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
							required
							onChange={e => setPasswordCrear(e.target.value)}
							className="form-control"
							placeholder="Contraseña"
							aria-label="contraseña"
							aria-describedby="basic-addon1"
						/>
					</div>
					<div className="col-12">
						<span className="badge badge-pill badge-light">
							*La contraseña debe contener 8 o más caracteres de al menos un número y una letra mayúscula
							y minúscula
						</span>
					</div>

					<div className="container">
						<div className="row mt-5 mb-5">
							<div className="col text-center">
								<button type="submit" className="btn btn-primary">
									Publicar mi servicio
								</button>
							</div>
						</div>
					</div>
				</form>
				{auth ? <Redirect to="/pulxesIndex" /> : null}
			</div>
		</div>
	);
};
