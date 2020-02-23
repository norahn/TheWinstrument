import React from 'react';
import logo from './logo.svg';
import MusicButton from './components/MusicButton.js';
import './App.css';
import Button from './components/Button';
import Instrument from './components/Instrument';
import Dropdown from './components/Dropdown';

function App() {
  return (
    <div className="App">
      <Dropdown/>
      <Instrument/>
    </div>
  );
}

export default App;
