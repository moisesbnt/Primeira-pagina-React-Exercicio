import React from 'react';
import './App.css';
import Router from './Router'
import { GlobalStyle } from './styles/Global';

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Router></Router>      
    </div>
  );
}

export default App;
