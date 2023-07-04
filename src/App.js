import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import auth from "./utils/auth";

function App() {
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
      <Footer />
    </Router>
  );
}

export default App;
