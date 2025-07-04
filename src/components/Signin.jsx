import React, { useState } from "react";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isTrueData } from "../redux/ActionCreator";
const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const styles = {
    container: {
      width: "300px",
      margin: "100px auto",
      textAlign: "center",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      fontFamily: "Arial",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },
    input: {
      padding: "10px",
      fontSize: "16px",
    },
    button: {
      padding: "10px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      cursor: "pointer",
    },
    error: {
      color: "red",
      fontSize: "14px",
    },
  };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    // Example sign-in logic
    const res = await fetch(
      "https://amazon-landing-page-backend.onrender.com/api/signin",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );
    const data = await res.json();
    if (res.ok) {
      Cookies.set("jwt", data.token, { expires: 7 });
      Cookies.get("jwt")
        ? navigate("/home")
        : Cookies.set("jwt", data.token, { expires: 7 });
      dispatch(isTrueData(true));
      alert("Logged in!");
    } else {
      alert(data.message || "Login failed");
    }
    console.log("Signing in with:", formData);
    // You would typically call an API here
    setFormData({
      email: "",
      password: "",
    });
  };
  return (
    <>
      <div style={styles.container}>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit} style={styles.form} method="POST">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />
          {error && <p style={styles.error}>{error}</p>}
          <button type="submit" style={styles.button}>
            Sign In
          </button>
          <div>
            New User <Link to="/signup">Sign up</Link> here
          </div>
        </form>
      </div>
    </>
  );
};

export default Signin;
