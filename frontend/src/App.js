import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import PresentationView from "./components/PresentationView/PresentationView"
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/presentations/:code" element={<PresentationView />} />

        </Routes>
      </div>
    </div>
  );
}
