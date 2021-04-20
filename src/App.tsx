import React from 'react';
import './App.css';

import robotData from './mock/robots.json'

import Robot from './components/Robot'

function App() {
  return (
    <ul>
      {
        robotData.map(item => <Robot {...item} />)
      }
    </ul>
  );
}

export default App;
