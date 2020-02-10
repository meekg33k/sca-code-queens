import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './routes';

import Header from './components/Header/index'

const App = () => {
  return (
    <div className='app'>
    <Routes />
    <Header heading='This is the he' size={3}/>
    </div>
  );
}

export default App;
