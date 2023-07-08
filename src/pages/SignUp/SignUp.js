import React, { useState } from "react";
import axios from "axios";
import Logo from "../../components/Logo/AppLogo";
import { Form, Button, Alert } from "react-bootstrap";
import { API_BASE } from "../../utils/constant";
import Loader from "../../components/Loader/Loader";
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
    <div className="Hero">
      <Form onSubmit={handleSubmit}>
        <Logo />
        {error ? (
          <Alert className="alert alert-danger mt-2 mb-3 text-center p-3">
            Something went wrong...
          </Alert>
        ) : null}
        <Form.Group controlId="register">
          <Form.Label>Full Name:</Form.Label>
          <Form.Control
            type="text"
            value={fullname}
            className="bg-light"
            isInvalid={error && !fullname.trim()}
            onChange={(e) => setFullName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="login">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            className="bg-light"
            isInvalid={error && !email.trim()}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            value={password}
            className="bg-light"
            isInvalid={error && !password.trim()}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <Form.Control.Feedback type="invalid">
              Field are required and cannot be empty
            </Form.Control.Feedback>
          )}
        </Form.Group>

        {isLoading ? (
          <Loader />
        ) : (
          <Button
            variant="danger btn-lg"
            type="submit"
            onClick={validateBtn}
            className="mt-3 d-grid gap-2 col-6 mx-auto w-100">
            Sign Up
          </Button>
        )}
        <br />
        <span className="mt-4">Already have an account? Log In here </span>

        <Link to={"/login"}>Log In</Link>

        {validator && (
          <Form.Control.Feedback>Fields cannot be empty</Form.Control.Feedback>
        )}
      </Form>
    </div>
  );
};

export default SignUp;
