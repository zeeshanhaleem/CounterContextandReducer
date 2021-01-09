import React, {useReducer} from 'react';
import CounterReducer from './CounterReducer.js';
const Child2= () =>{

let [state, dispatch]=useReducer(CounterReducer,1);

return(
<div>
<h2>This is 2nd Child using CounterReducer</h2>
<h3>Value of Reducer state is : {state}</h3>
<button onClick={()=>dispatch('INCREMENT')}>Increament in Reducer</button>
</div>
)
}
export default Child2;