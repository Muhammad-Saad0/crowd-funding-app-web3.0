import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project-details/:id" element={<Project />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
