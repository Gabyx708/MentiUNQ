import "./App.css";
import Home from "./pages/Home/index";
import { Route, Routes } from "react-router-dom";
import PresentationView from "./pages/PresentationView/PresentationView.jsx"
import CreatePresentation from "./pages/CreatePresentation/index.jsx";
export default function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view/presentations/:code" element={<PresentationView />} />
          <Route path="/edit/presentation/:id" element={<CreatePresentation />} />
        </Routes>
    </div>
  );
}
