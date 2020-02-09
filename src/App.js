import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './routes';
import Text from './components/Text/Text.js'

const App = () => {
  return (
    <div>
    
    <Routes />
    <Text text="It's a text"></Text>
    </div>
  );
}

export default App;
