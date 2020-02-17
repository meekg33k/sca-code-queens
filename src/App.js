import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './routes';
import Text from './components/Text/index';

import Header from './components/Header/index'

const App = () => {
  return (
    <div>
      <Routes />
      <Text text="It is a text" />
    </div>
  );
}

export default App;
