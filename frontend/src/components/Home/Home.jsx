import {Link} from "react-router-dom"
import unqLogo from "../../assets/mentiLogo.png";
import { useState } from "react";
import "./Home.css"

export default function Home() {
  const [codigo, setCodigo] = useState(0);

  return (
    <>
      <img src={unqLogo} alt="logo" className="w-1/3 p-2" />
      <div className="container-input-code">
        <input
          type="text"
          className=" rounded-md p-2 w-96 shadow-lg text-black"
          placeholder="introduce el codigo aqui"
          onChange={(e) => setCodigo(e.target.value)}
        ></input>
    
        <Link to={"/presentations/"+codigo}>
          <button className="btn"> Unirse</button>
        </Link>
      </div>
    </>
  );
}
