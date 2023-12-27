import React from 'react';
import './App.css';
import Header from "./Header";
import Home from './Home';
import Checkout from './Checkout';
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
        <Route exact path='/checkout' element={<Checkout />} />
        <Route exact path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
