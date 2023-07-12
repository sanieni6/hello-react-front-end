import React from 'react';
import {
  Routes, Route,
} from 'react-router-dom';
import Header from './components/Header';
import Greetings from './components/Greetings';
import './App.css';

function Home() {
  return <h1 className="title">Welcome, Micronaut!!</h1>;
}

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Greetings" element={<Greetings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
