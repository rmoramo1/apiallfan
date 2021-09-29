import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Pulxes } from "../component/pulxes";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const PulxesIndex = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadPulxes();
		actions.loadSitios();
	}, []);

	return (
		<div className="container-fluid">
			<div className="col-12 text-center mt-3">
				<h1>NFL</h1>
			</div>
			<div className="col-12">
				{store.nfl.map((item, index) => {
					return (
						<div id={"pulxe" + index} key={index} className={"col-12"}>
							<Pulxes
								key={index}
								home={item.home}
								away={item.away}
								scoreTotalHome={item.scoreTotalHome}
								scoreTotalAway={item.scoreTotalAway}
								id={index}
							/>
						</div>
					);
				})}
			</div>
			<div className="col-12 text-center mt-3">
				<h1>baseball</h1>
			</div>
			<div className="col-12">
				{store.baseball.map((item, index) => {
					return (
						<div id={"nfl" + index} key={index} className={"col-12"}>
							<Pulxes
								key={index}
								home={item.home}
								away={item.away}
								scoreTotalHome={item.scoreTotalHome}
								scoreTotalAway={item.scoreTotalAway}
								id={index}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};
