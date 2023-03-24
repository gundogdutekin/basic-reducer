import { useState,useReducer } from 'react'

import './App.css'
const initialState = {
  count: 0
}
const reduceFn = (prvState, action) => {
  switch (action.type) {
    case 'increment':
      return { count: prvState.count + 1 }
    case 'decrement':
      return { count: prvState.count - 1 }
    case 'reset':
      return { count: initialState.count }
    default:
      return prvState.count
  }
}

function App() {
  
  const [state, dispatch] = useReducer(reduceFn, initialState)
  return (
    <div className="App">
      <h1>{state.count}</h1>
     <button onClick={()=>dispatch({type:"increment"})} className='btn btnSucces'>Artır</button>
     <button onClick={()=>dispatch({type:"decrement"})} className='btn btnDanger'>Eksilt</button>
     <button onClick={()=>dispatch({type:"reset"})} className='btn btnDefault'>Sıfırla</button>
      
    </div>
  )
}

export default App
