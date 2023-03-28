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
  const increment=()=>{
    state.count>=10?alert("Ondan büyük olamaz"):dispatch({type:"increment"})
  }
  const decrement=()=>{
    state.count===0?alert("Sıfırdan küçük olamaz"):dispatch({type:"decrement"})
  }
  const reset=()=>{
    dispatch({type:"reset"})
  }
  return (
    <div className="App">
      <h1>{state.count}</h1>
     <button onClick={increment} className='btn btnSucces'>Artır</button>
     <button onClick={decrement} className='btn btnDanger'>Eksilt</button>
     <button onClick={reset} className='btn btnDefault'>Sıfırla</button>
      
    </div>
  )
}

export default App
