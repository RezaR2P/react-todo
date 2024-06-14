// src/pages/Welcome.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  useEffect(() => {
    alert("Selamat Datang");
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000); // Redirect to home after 3 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div>
        <h1>Welcome to the Todo App</h1>
        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate("/home")}
        >
          Go to Home
        </button>
        <button
          className="btn btn-secondary mt-3 ms-2"
          onClick={() => navigate("/goodbye")}
        >
          Exit
        </button>
      </div>
    </div>
  );
}

export default Welcome;
