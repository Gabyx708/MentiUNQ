import { useEffect } from "react";
import "./index.css";
import addUser from "../../services/Users/addUser";
import { useAuth0 } from "@auth0/auth0-react";
import HomeCard from "./HomeCard";
import Loading from "../../components/Loading/Loading"
import PanelControl from "../../components/PanelControl/PanelControl";
import Navbar from "../../components/NavBar/NavBar";
export default function Home() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      addUser(user);
    }
  }, [isAuthenticated, user]);

  return (
    <div >
      {isLoading ? (
        <Loading />
      ) : (
        <div className="home">
          <header className="header-home">
            <Navbar isAuthenticated={isAuthenticated} isLoading={isLoading} user={user} />
          </header>
          {isAuthenticated ? (
            <PanelControl user={user}/>
          ) : (
            <HomeCard />
          )}
        </div>
      )}
    </div>
  );
}
