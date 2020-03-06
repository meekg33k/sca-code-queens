import React from 'react';
import './App.css';
import Routes from './routes';
import Text from './components/Text/index';
import Jumbotron from './components/Jumbotron/index';
import Navigation from './components/Navigation/index';




const App = () => {
  
  return (
    
    <div>
      <Navigation />
      <Routes />
      <Text color="greenish" size="medium" text="It is a text" />

      <Jumbotron />
      
    </div>

    
    
  );
}

export default App;
