import { useState , useEffect } from "react";
import "./index.css";
import Navbar from "../../components/Edit/NavBar/NavBar";
import addUser from '../../services/Users/addUser';
import { useAuth0 } from "@auth0/auth0-react";
import HomeCard from "./HomeCard";

export default function Home() {

 
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log("🚀 ~ file: NavBar.js ~ line 11 ~ Navbar ~ isLoading", isLoading);
  console.log(
    "🚀 ~ file: NavBar.js ~ line 11 ~ Navbar ~ isAuthenticated",
    isAuthenticated
  );
  
  useEffect(()=>{
    if(isAuthenticated){
      addUser(user);
    }
  },[isAuthenticated , user])

  
  return ( 
    <div className="home">
      <header className="header-home">
        <Navbar/>
      </header>
      {isAuthenticated ? (<h4>Aun no tienes presentaciones! :C </h4>) : (<HomeCard/>)}     
      </div>
  );
}
