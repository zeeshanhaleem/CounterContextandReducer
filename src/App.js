import React, { useState } from 'react';
import Parents from './Parents.js';
import './App.css';
import CounterContext from './CounterContext.js';

function App() {
   let countState= useState(1)
  //let [count,setcount]=useState(30)
  return (
    <CounterContext.Provider value={countState}>
    <div>
     <Parents /> 
    </div>
    </CounterContext.Provider>
  );
}

export default App;
