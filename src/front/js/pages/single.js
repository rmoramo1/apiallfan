import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
//import StarRating from "../component/StarRating";

export const Single = props => {
	const [rating, setRating] = useState();
	const [hover, setHover] = useState(0);
	const { store, actions } = useContext(Context);
	const params = useParams();

	const califica = store.pulxes[params.theid].calificacionPromedio;
	console.log(califica);

	useEffect(() => {
		setRating(califica);
	}, []);

	const whatsapp = "https://wa.me/506" + store.pulxes[params.theid].numero;
	const llamar = "tel:+506" + store.pulxes[params.theid].numero;
	return (
		<div className="container mt-5">
			<div className="row rounded shadow border overflow-hidden">
				<div className="col-12 float-left p-0 bgImgSingle">
					<div className="imgSingle" />
				</div>
				<div className="col-12">
					<div className="col-12 float-left text-center mb-1">
						<div className="col-12 float-left">
							<h1>{store.pulxes[params.theid].nombre}</h1>
						</div>
						<div className="col-12 text1_5r">
							<div className="col-6 float-left font-weight-bold text-right">Pulxe</div>
							<div className="col-6 float-left tipoPulxe text-left">
								{store.pulxes[params.theid].pulxe}
							</div>
						</div>
						<div className="col-12 float-left text-center">
							<div className="col-12 float-left font-weight-bold">
								Calificación
								{[...Array(5)].map((star, index) => {
									index += 1;
									return (
										<button
											type="button"
											key={index}
											className={index <= (hover || rating) ? "on" : "off"}>
											<span className="star">&#9733;</span>
										</button>
									);
								})}
							</div>
						</div>
					</div>
					<div className="col-12">
						<div className="col-12 float-left">
							<div className="col-6 float-left">
								{" "}
								<span className="font-weight-bold">Categoria: </span>
								{store.pulxes[params.theid].categoria}
							</div>
						</div>
						<div className="col-12 float-left">
							<div className="col-4 p-0 float-left">
								<div className="col-12 ">
									<span className="font-weight-bold">Provincia: </span>
									{store.pulxes[params.theid].provincia}
								</div>
								<div className="col-12" />
							</div>
							<div className="col-4 p-0 float-left">
								<div className="col-12">
									<span className="font-weight-bold">Cantón: </span>
									{store.pulxes[params.theid].canton}
								</div>
							</div>
							<div className="col-4 p-0 float-left">
								<div className="col-12">
									<span className="font-weight-bold">Distrito: </span>
									{store.pulxes[params.theid].distrito}
								</div>
							</div>
						</div>
						<div className="col-12 float-left">
							<div className="col-6 float-left">
								<span className="font-weight-bold">Años EXP: </span>
								{store.pulxes[params.theid].experiencia}
							</div>
						</div>
						<div className="col-12 float-left">
							<div className="col-6 float-left">
								<span className="font-weight-bold">Numero: </span>
								{store.pulxes[params.theid].numero}
							</div>
						</div>
						<div className="col-12 flost-left">
							<div className="col-12 font-weight-bold float-left">Descripcion</div>
							<div className="col-12 float-left">{store.pulxes[params.theid].descripcion}</div>
						</div>
						<div className="col-12 mt-1 text-center">
							<div className="col-3 float-left text4r">
								<a
									href={whatsapp}
									id="ws"
									className="wsColorText"
									target="_blank"
									rel="noopener noreferrer">
									<i className="fab fa-whatsapp" />
								</a>
							</div>
							<div className="col-3 float-left text4r">
								<a href={llamar} className="llamadaColorText">
									<i className="fas fa-phone" />
								</a>
							</div>
							<div className="col-3 float-left text4r">
								{/* Trigger del Boton*/}

								<button
									type="button"
									className="far fa-envelope llamadaColorText"
									data-toggle="modal"
									data-target="#exampleModal"
								/>
							</div>
							<div className="col-3 float-left text4r">
								<button
									type="button"
									className="far fa-star llamadaColorText"
									data-toggle="modal"
									data-target="#calificacion"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-12 text-center my-4">
				<Link to="/pulxesIndex" className="btn btn-danger">
					Regresar al Directorio
				</Link>
			</div>
			{/* Trigger del Modal*/}
			<div
				className="modal fade"
				id="exampleModal"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title font-weight-bolder" id="exampleModalLabel">
								{" "}
								Comunícate en instantes con {store.pulxes[params.theid].nombre}{" "}
							</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<form>
								<div className="form-group">
									<label htmlFor="exampleFormControlInput1">Nombre</label>
									<input
										type="email"
										className="form-control"
										id="exampleFormControlInput1"
										placeholder="Escribe tu Nombre"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="exampleFormControlTextarea1">Escribe tu Mensaje</label>
									<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
								</div>
							</form>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-danger" data-dismiss="modal">
								Cancelar
							</button>
							<button type="button" className="btn btn-success">
								Enviar Mensaje
							</button>
						</div>
					</div>
				</div>
			</div>
			<div
				className="modal fade"
				id="calificacion"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Califica el Servicio de {store.pulxes[params.theid].nombre}
							</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<div className="input-group align-content-center" id="puntaje">
								<div className="star-rating">
									{[...Array(5)].map((star, index) => {
										index += 1;
										return (
											<button
												type="button"
												key={index}
												className={index <= (hover || rating) ? "on" : "off"}
												onClick={() => setRating(index)}
												onMouseEnter={() => setHover(index)}
												onMouseLeave={() => setHover(rating)}>
												<span className="star">&#9733;</span>
											</button>
										);
									})}
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-danger" data-dismiss="modal">
								Cancelar
							</button>
							<button type="button" className="btn btn-success">
								Guardar
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
