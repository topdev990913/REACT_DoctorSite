import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Header from "./navbar/navbar"
import Footer from "./footer/footer"
import Home from "./pages/Home"
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;