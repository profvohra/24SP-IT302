import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddReview from "./components/addReview";
import MoviesList from "./components/moviesList";
import Movie from "./components/movie";
import Login from "./components/login";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function App() {
  const [user, setUser] = useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null);
  }
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Movie Reviews</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to={"/movies"}>
              Movies
            </Nav.Link>
            <Nav.Link as={NavLink} to={user ? "" : "/login"}>
              {user ? "Logout User" : "Login"}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route path="/" element={<MoviesList />}></Route>
        <Route path="/movies" element={<MoviesList />}></Route>

        <Route path="/movies/:id/" element={<Movie user={user} />}></Route>
        <Route
          path="/movies/:id/review"
          element={<AddReview user={user} />}
        ></Route>

        <Route path="/login" element={<Login login={login} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
