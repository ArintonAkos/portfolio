import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import { BrowserRouter, Route } from 'react-router-dom';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');

function App() {
  return (
    <BrowserRouter basename={baseUrl} >
      <Route exact path='/' render={Home} />
      <Route exact path='/contact' render={Contact} />
    </BrowserRouter>
  );
}

export default App;
