import "./App.css";
import Kontakt from "./Pages/Kontakt";
import Omnie from "./Pages/Omnie";
import Portfolio from "./Pages/Portfolio";
import Proces from "./Pages/Proces";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/proces" element={<Proces />} />
        <Route path="/o-mnie" element={<Omnie />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
    </Router>
  );
}

export default App;
