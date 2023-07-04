import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { API_BASE } from "../utils/constant";
import Loader from "../components/Loader/Loader";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [validator, setValidator] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(`${API_BASE}/users/signup`, {
        fullname,
        email,
        password,
      });
      console.log(res);

      setIsLoading(true);
      res.data && window.location.replace("/login");
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  const validateBtn = () => {
    if (!fullname || !email || !password) {
      console.log("Error");
      setValidator(true);
    }
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <h1 className="mt-5 pt-5 mb-3 text-center">Please Sign Up</h1>
        <Form.Group controlId="register">
          <Form.Label>Full Name:</Form.Label>
          <Form.Control
            type="text"
            value={fullname}
            placeholder="Full name"
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            placeholder="Email address..."
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            value={password}
            placeholder="Password ************"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button
          variant="primary btn-lg mt-3 mt-3 btn-primary d-grid gap-2 col-6 mx-auto btn-lg"
          onClick={validateBtn}
          type="submit">
          Submit
        </Button>
        <Link to={"/login"}>
          <span className="mt-4">Log In</span>
        </Link>
        {isLoading ? <Loader /> : null}
        {validator ? (
          <span className="error bg-danger mt-3 rounded-3 p-3 text-light">
            Fields cannot be empty
          </span>
        ) : null}
      </Form>
      {error && (
        <span className="error bg-danger mt-5 rounded-3 p-3 text-light">
          Something went wrong...
        </span>
      )}
    </div>
  );
};

export default SignUp;
