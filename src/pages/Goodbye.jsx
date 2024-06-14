// src/pages/Goodbye.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Goodbye() {
  useEffect(() => {
    alert("Sampai Jumpa");
  }, []);
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="mb-4">Goodbye! See you again!</h1>
      <button className="btn btn-primary" onClick={() => navigate("/home")}>
        Go to Home
      </button>
    </div>
  );
}

export default Goodbye;
