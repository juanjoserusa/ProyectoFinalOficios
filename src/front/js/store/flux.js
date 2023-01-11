const getState = ({ getStore, setStore }) => {
	return {
	  store: {
		token: null,
		message: null,
	  },
	  actions: {
		syncTokenFromSessionStore: () => {
		  const token = sessionStorage.getItem("token");
		  console.log("Application just loaded");
  
		  if (token && token != "" && token != undefined)
			setStore({ token: token });
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
			setStore({ message: data.message });
			// don't forget to return something, that is how the async resolves
			return data;
		  } catch (error) {
			console.log("Error loading message from backend", error);
		  }
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
			setStore({ token: data.access_token });
			return true;
		  } catch (error) {
			console.error("there hast been an error login");
		  }
		},
	  },
	};
  };
  
  export default getState;
  