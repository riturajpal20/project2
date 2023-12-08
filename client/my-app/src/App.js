import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route, Router } from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Login from "./components/Login.js";

import Signup from './components/Signup';
import { Routes } from "react-router-dom";
// import { Routes } from "react-router";



// const Home = () => {
//   return (
//     <>
//       <Navbar />
//       <section className="hero-section">
//         <p>Subscribe to </p>
//         <h1>Thapa Technical Home Page</h1>
//       </section>
//     </>
//   );
// };

// const About = () => {
//   return (
//     <>
//       <Navbar />
//       <section className="hero-section">
//         <p>Welcome to </p>
//         <h1>Thapa Technical About Page</h1>
//       </section>
//     </>
//   );
// };

// const Login = () => {
//   return (
//     <>
//       <Navbar />
//       <section className="hero-section">
//         <p>Welcome to </p>
//         <h1>Thapa Technical Service Page</h1>
//       </section>
//     </>
//   );
// };

// const Signup = () => {
//   return (
//     <>
//       <Navbar />
//       <section className="hero-section">
//         <p>Welcome to </p>
//         <h1>Thapa Technical Contact Page</h1>
//       </section>
//     </>
//   );
// };


const App = () => {
  return (
    // <Navbar />
    <Router>
      <Switch>

        <Navbar />
      <Route element={<Home />} path="/" />
      <Route element={<About />} path="about" />
      <Route element={<Login />} path="login" />
      <Route element={<Signup />} path="signup" />
      
      
      </Switch>
      {/* <Navbar />
      <Route element={<Home />} path="/" />
      <Route element={<About />} path="about" />
      <Route element={<Login />} path="login" />
      <Route element={<Signup />} path="signup" />
      
       */}
      

     
    </Router>
  );
};

export default App;