const [password, setPassword] = useState("");




 getUserData: async (userData) => {


fetch("https://3001-juanjoserus-proyectofin-02j8fzvigjo.ws-eu83.gitpod.io/api/request_password", requestOptions)
  .then(response => response.text())
  .then(result => setPassword(result))
  .catch(error => console.log('error', error));


 }


 function handleSubmit(event) {
    event.preventDefault();
    // Aqui puedes enviar la contraseña a otra parte de tu aplicación o procesarla como sea necesario
  }

  function handleChange(event) {
    setPassword(event.target.value);
  }


 return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={password} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );

