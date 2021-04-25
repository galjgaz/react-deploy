import React from 'react';
import profileImage from './img/avatar.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>My React App</h1>
    <h3>Autor: Gurun</h3>
    <img src={profileImage} alt="profile image"/>

    </div>
  );
}

export default App;
