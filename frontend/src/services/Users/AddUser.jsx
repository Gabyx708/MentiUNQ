//este componenete agrega usuarios
import {useAuth0 } from "@auth0/auth0-react";

export function AddUser({User}) {
  

  let newUser = { email: User.email, name: User.name };

  fetch("http://localhost:8080/users/create", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(newUser),
  })
    .then((res) => res.json())
    .then((response) => response);
  
    return console.log('work')
}
