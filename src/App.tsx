import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Routes from './routes'

import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="container">
        <Routes/>
      </div>
    </BrowserRouter>
  );
}

export default App;
