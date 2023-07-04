// eslint-disable-next-line
import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { API_BASE } from "../utils/constant";
import Loader from "../components/Loader/Loader";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [validator, setValidator] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${API_BASE}/users/login`, {
        email,
        password,
      });

      localStorage.setItem(
        "todoApp",
        JSON.stringify({
          token: res.data.token,
          email: res.data.fullname,
        })
      );

      setIsLoading(true);
      console.log(res);
      res.data && window.location.replace("/");
    } catch (error) {
      setError(true);
      console.log({ error });
    }
  };

  const validateBtn = () => {
    if (!email || !password) {
      console.log("Error");
      setValidator(true);
    }
  };

  return (
    <div>
      <h1 className="mt-5 pt-5 mb-3 text-center">Please Login In</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="login">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            placeholder="Email address..."
            onChange={(e) => setEmail(e.target.value)}
          />

          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            value={password}
            placeholder="Password ********"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={validateBtn}
          className="mt-3 btn-primary d-grid gap-2 col-6 mx-auto btn-lg">
          Log In
        </Button>

        <span className="mt-4">Create an account?</span>

        <Link to={"/signup"}>Sign Up</Link>
        {isLoading ? <Loader /> : null}
        {validator ? (
          <span className="error bg-danger mt-3 rounded-3 p-3 text-light">
            Fields cannot be empty
          </span>
        ) : null}
      </Form>

      {error && (
        <span className="error bg-danger mt-3 rounded-3 p-3 text-light">
          Something went wrong...
        </span>
      )}
    </div>
  );
};

export default Login;
