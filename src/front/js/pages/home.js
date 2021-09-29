import React, { useContext, useDebugValue, useEffect } from "react";
import { Context } from "../store/appContext";
import AOS from "aos";
import "../../../../node_modules/aos/dist/aos.css";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

import { Pulxes } from "../component/pulxes";

export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		AOS.init({ duration: 1500 });
		actions.loadPulxes();
	}, []);
	return (
		<div className="container-fluid p-0">
			<div className="col-12 text-center mt-3">
				<h1 id="tituloIndexPulxe">Juegos</h1>
			</div>
			{store.nfl.map((item, index) => {
				return (
					<div id={"pulxe" + index} key={index} className={""}>
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
			{store.baseball.map((item, index) => {
				return (
					<div id={"nfl" + index} key={index} className={""}>
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
	);
};
