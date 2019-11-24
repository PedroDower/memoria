import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
//import logo from './logo.svg';  
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;