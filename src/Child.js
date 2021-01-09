import React , {useContext}from 'react';
import CounterContext from './CounterContext';

const Child = ()=> {
    let Countervalue= useContext(CounterContext)
    return(
        <div>
            <h2>This is 1st Child using CounterContext</h2>
            <h4>Counter Value is {Countervalue[0]}</h4>
    
            <button onClick={()=> {Countervalue[1](++Countervalue[0])}}>
            Increament Context</button>
        </div>
    )
}
export default Child