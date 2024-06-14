import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import Goodbye from "./pages/Goodbye";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/goodbye" element={<Goodbye />} />
        <Route component={() => <h1>404: Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
