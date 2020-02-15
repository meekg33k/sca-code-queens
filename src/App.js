import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './routes';

import Header from './components/Header/index'

const App = () => {
  return (
    <div className='app'>
    <Header heading='This is a heading' size={3}/>
    <Routes />
    </div>
  );
}

export default App;
