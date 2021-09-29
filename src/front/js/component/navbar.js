import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	let refrescar = () => {
		location.reload();
	};
	return (
		<nav className="navbar greenPulseBG sticky-top">
			<div className="ml-auto col-9 text-center">
				<div className="col-6 float-left">
					<Link className="text-white nav-item ml-3" to="/">
						Inicio
					</Link>
					<Link className="text-white nav-item ml-3" to="/pulxesIndex">
						Juegos
					</Link>
				</div>
				<div className="col-3 text-white float-left">{store.username_temp}</div>
				<div className="col-1 text-white float-left d-none" id="btnLogOut">
					<a href="#" onClick={refrescar} className="text-white">
						<h4>
							<i className="fas fa-sign-out-alt" />
						</h4>
					</a>
				</div>
			</div>
		</nav>
	);
};
