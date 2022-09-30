//este componenete agrega usuarios
import {useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react"; 

export default function addUser(){
  
  const {user} = useAuth0();
  
    useEffect(()=>{

      let newUser = { email: user.email, name: user.name };

      fetch("http://localhost:8080/users/create", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then((response) => response);
    },[user])
  
    
}
