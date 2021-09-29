import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Pulxes = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid">
			<div className="col-12 float-left">
				<div className="shadow row text-center">
					<div className="col-12 bg-dark text-white py-3 text-uppercase mt-3">
						<div className="col-2 float-left font-weight-bold">equipo Casa</div>
						<div className="col-2 float-left font-weight-bold">equipo Visita</div>
						<div className="col-2 float-left font-weight-bold">marcador Casa</div>
						<div className="col-2 float-left font-weight-bold">marcador Visita</div>
					</div>
					<div className="col-12 py-2 ">
						<div className="col-2 float-left tipoPulxe">{props.home}</div>
						<div className="col-2 float-left tipoPulxe">{props.away}</div>
						<div className="col-2 float-left">{props.scoreTotalHome}</div>
						<div className="col-2 float-left">{props.scoreTotalAway}</div>
					</div>
				</div>
			</div>
		</div>
	);
};
Pulxes.propTypes = {
	home: PropTypes.string,
	away: PropTypes.string,
	scoreTotalHome: PropTypes.number,
	scoreTotalAway: PropTypes.number,
	id: PropTypes.number
};
