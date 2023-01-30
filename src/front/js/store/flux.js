

const getState = ({ getStore, setStore }) => {
	return {
	  store: {
		token: null,
		email: null,
		message: null,
		user_type: null,
		search: [],
		mensajeCliente: [],
		id:null,
		key_pass:null,
	  },
	  actions: {

		loadMessage : (id) => {

			var requestOptions = {
				method: 'GET',
				redirect: 'follow',			
					
			  };
			  fetch(process.env.BACKEND_URL + "/api/recibirMensaje/"+id, requestOptions)
				.then(response => response.json())
				.then(result => {
					setStore({mensajeCliente:result})
					console.log(result)
				  })
				.catch(error => console.log('error', error));
		},

		
		loadAnnounces: ()=> {
			var requestOptions = {
				method: 'GET',
				redirect: 'follow',
			  };
			  
				fetch(process.env.BACKEND_URL + "/api/anuncios", requestOptions)
				.then(response => response.json())
				.then(result => {
				  setStore({search:result})
				  console.log(result)
				})
				.catch(error => console.log('error', error));
		},

		syncTokenFromSessionStore: () => {
		  const token = sessionStorage.getItem("token");
		  const user_type = sessionStorage.getItem("user_type");
		  console.log("Application just loaded");
  
		  if (token && token != "" && token != undefined)
			setStore({ token: token, user_type: user_type });
		},
		logout: () => {
		  const token = sessionStorage.removeItem("token");
		  console.log("Login out");
		  setStore({ token: null });
		},
  
		getMessage: async () => {
		  const store = getStore();
		  const opts = {
			headers: {
			  Authorization: "Bearer " + store.token,
			},
		  };
		  try {
			// fetching data from the backend
			const resp = await fetch(
			  process.env.BACKEND_URL + "/api/sessionlogin",
			  opts
			);
			const data = await resp.json();
			console.log(data)
			setStore({ message: data.message, email: data.email, id: data.id });
			// don't forget to return something, that is how the async resolves
			return data;
		  } catch (error) {
			console.log("Error loading message from backend", error);
		  }
		},
		search : (event) => {
			fetch(process.env.BACKEND_URL + "/api/search", {
				
			  method: 'POST',
			  body: JSON.stringify({
				query: event
			  }),
			  headers: {
				'Content-Type': 'application/json'
			  }
			})
			  .then(response => response.json())
			  .then(results => {
				console.log(results)
				setStore({search:results.result});

			  });
	    },

		login: async (email, password) => {
		  const opts = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
			  email: email,
			  password: password,
			}),
		  };
		  try {
			const resp = await fetch(
			  process.env.BACKEND_URL + "/api/token",
			  opts
			);
  
			if (resp.status !== 200) {
			  alert("there has been some error");
			  return false;
			}
			const data = await resp.json();
			console.log("this came from the backend", data);
			sessionStorage.setItem("token", data.access_token);
			sessionStorage.setItem("user_type", data.type)
			sessionStorage.setItem("id", data.id)
			setStore({ token: data.access_token, user_type: data.type});
			return true;
		  } catch (error) {
			console.error("there hast been an error login");
		  }
		 },
		    reset_password: async (email,new_password) => {
				const opts = {
				method: 'POST',
				headers:{"Content-Type": "application/json"} ,
				body: JSON.stringify({
					email: email,
					new_password:new_password
				  }),
				};
				try {
					const resp = await fetch(
					  process.env.BACKEND_URL + "/api/reset_password",
					  opts
					);

					const data = await resp.json();
					console.log(data)
					setStore({ email: data.email, id: data.id ,new_password:data.password});
					return data;
				  } catch (error) {
					console.log("Error datos incorrectos", error);
			      }

			},

			validateKeyPass: () => {
				var requestOptions = {
					method: 'GET',
					headers: myHeaders,
					body: raw,
					redirect: 'follow'
				};	

				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					"email": " ",
					"key_pass": " "
				});
					
				fetch( process.env.BACKEND_URL + "/api/validateKeyPass",
				requestOptions)
				.then(response => response.json())
				.then(result => {
				setStore({key_pass:data.key_pass, email:data.email})
				console.log(result)
				})
				.catch(error => console.log('error', error));					
	        },	
		},
	};
  };
  
  export default getState;
  