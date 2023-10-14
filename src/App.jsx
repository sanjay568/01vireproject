import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function addOne() {
    if(count<20){
    setCount(count+1);
    }
    else{
      alert("You reach max");
    }
  }
  function removeOne() {
    if(count>0) {
    setCount(count-1);
  }
  else{
    alert("You reach min");
  }
  }
  return (
    <>
      Count : {count}
      <button  onClick={addOne}>Add</button>
      <button onClick={removeOne}>Remove</button>
    </>
  )
}

export default App
