import React from 'react';
import './App.css';
import Routes from './routes';
import Text from './components/Text/index';
import Jumbotron from './components/Jumbotron/index'


const App = () => {
  return (
    
    <div>
      <Routes />
      <Text text="It is a text" />
      <Jumbotron />
      
    </div>

    
    
  );
}

export default App;
