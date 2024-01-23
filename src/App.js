// App.js
import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Home from "./Home"

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <div className='content'>
        <Home />
        </div>
      
        
      </BrowserRouter>
    </div>
  );
}

export default App;



