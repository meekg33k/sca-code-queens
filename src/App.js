import React from 'react';
import './App.css';
import Routes from './routes';
import Text from './components/Text/index';


const App = () => {
  return (
    <div>
      <Routes />
      <Text text="It is a text" />
    </div>
  );
}

export default App;
