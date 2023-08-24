import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
