import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
            path="/login" 
            element={
              <>
                <Header />
                <Login />
              </>
            } 
          />
          <Route 
            path="/checkout" 
            element={
              <>
                <Header />
                <Checkout />
              </>
            } 
          />
          <Route 
            path="/" 
            element={
              <>
                <Header />
                <Home />
              </>
            } 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;