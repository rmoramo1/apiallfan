const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			baseball: [],
			nfl: [],
			username_temp: "",
			calificacion_temp: ""
		},
		actions: {
			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			loadPulxes: async () => {
				const url = "http://192.168.20.220:3001/api/nfl"; //url de backend
				const response = await fetch(url);
				const results = await response.json();
				setStore({ nfl: results });
			},
			loadSitios: async () => {
				const url = "http://192.168.20.220:3001/api/baseball"; //url de API
				const response = await fetch(url);
				const results = await response.json();
				setStore({ baseball: results });
			},
			changename: username => {
				setStore({ username_temp: username });
			},
			changeCalificacion: calificacion => {
				setStore({ calificacion_temp: calificacion });
			}
		}
	};
};

export default getState;
