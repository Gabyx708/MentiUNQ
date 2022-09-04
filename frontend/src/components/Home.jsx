import unqLogo from "../assets/mentiLogo.png";
import { useState } from "react";

export default function Home() {
  const [codigo, setCodigo] = useState(0);

  return (
    <header className="App-header">
      <img src={unqLogo} alt="logo" className="w-1/3 p-2" />
      <div>
        <input
          type="number"
          className=" rounded-md p-2 w-96 shadow-lg text-black"
          placeholder="introduce el codigo aqui"
          onChange={(e) => setCodigo(e.target.value)}
        ></input>
        <button
          className="bg-blue-500 p-2 rounded-md ml-2 hover:bg-blue-400 shadow-xl w-20"
          onClick={() =>
            codigo === null
              ? alert("uniendose..." + codigo)
              : alert("no has introducido ningun codigo!")
          }
        >
          Unirse
        </button>
      </div>
    </header>
  );
}
