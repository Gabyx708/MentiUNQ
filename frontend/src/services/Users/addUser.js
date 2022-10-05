//esta funcion agrega usuarios

export default function addUser(usuario) {
  
  let newUser = { email: usuario.email, name: usuario.name };

  fetch("http://localhost:8080/users/create", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(newUser),
  })
    .then((res) => res.json())
    .then((response) => response);
    
 

}
