import React from "react";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import { auth } from "./utils/auth";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route exact path="/" element={auth ? <Dashboard /> : <SignUp />} />
          <Route
            exact
            path="/signup"
            element={auth ? <Dashboard /> : <SignUp />}
          />
          <Route
            exact
            path="/login"
            element={auth ? <Dashboard /> : <Login />}
          />
        </Routes>
      </Container>
      {auth && <Footer />}
    </Router>
  );
};

export default App;
