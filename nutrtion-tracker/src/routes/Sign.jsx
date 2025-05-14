// routes/Sign.jsx
import React, { useState } from "react";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Profile from "../pages/Profile"
import ErrorPage from "../pages/ErrorPage.jsx";
import "../App.css"
function Sign() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [view, setView] = useState("login"); // 'login' | 'register' | 'error'

  const handleLogin = (credentials) => {
    console.log("Login attempt with:", credentials);
    // Simulated login
    setIsAuthenticated(true);
  };

  const handleRegister = (userData) => {
    console.log("Registration with:", userData);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setView("login");
  };

  if (isAuthenticated) {
    return (
      <div>
        <h2>Welcome, User!</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  // Not authenticated — show login or register
  return (
    <div className="auth-container">
      {view === "login" && <Login onLogin={handleLogin} />}
      {view === "register" && <Register onRegister={handleRegister} />}
      {view === "error" && <ErrorPage />}
      
      <div style={{ marginTop: "1rem" }}>
        {view !== "login" && (
          <button onClick={() => setView("login")}>Go to Login</button>
        )}
        {view !== "register" && (
          <button onClick={() => setView("register")}>Go to Register</button>
        )}
      </div>
    </div>
  );
}

export default Sign;

