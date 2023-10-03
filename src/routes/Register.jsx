//Register.jsx

import { useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/Register.css";
export default function Register({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username,
            password,
            name: {
              firstname: "",
              lastname: "",
            },
            address: {
              city: "",
              street: "",
              number: 3,
              zipcode: "",
              geolocation: {
                lat: "",
                long: "",
              },
            },
            phone: "",
          },
        }),
      });

      const result = await response.json();
      if (response.ok) {
        setToken(result.data.token);
        navigate("/profile");
      } else {
        setError(result.error.message);
      }
    } catch (error) {
      setError("Error registering user.");
      console.error("Error registering user:", error);
    }
  }

  return (
    <div id="signUp">
      <h2>Sign Up!</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            type="text"
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label>
          Password:{" "}
          <input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="submit">
          Submit
        </button>
      </form>
      <Link to="/" className="returnButton">
        <button className="goBack" onClick={() => navigate("/landing-page")}>
          Return
        </button>
      </Link>
          </div>
  );
}

Register.propTypes = {
  setToken: PropTypes.func,
};