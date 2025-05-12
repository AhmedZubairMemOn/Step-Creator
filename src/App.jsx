import { useState } from 'react'
import './App.css'

function App() {
  
  const [screen, setScreen] = useState(0)

  const motivationSentence =[
    "Step 1: Learn React",
    "Step 2: Get a job, and earn new Income",
    "Step 3: Invest your new Income"
  ]

  const PreviousHandler = ()=>{
    if(screen == 0){
      setScreen(2)
    }else{
      setScreen(screen - 1)
    }
    
  }

  const nextHandler = ()=>{
    console.log("chal raha hy ");
    if(screen == motivationSentence.length - 1){
      setScreen(0)
    }else{
      setScreen((s)=> s + 1)
    }
  }
  return (
    <>
    <div className='container'>

      <div className='circleBox'>
        <div className='circle' style={{
          backgroundColor: screen === 0 ? "crimson" : "lightgray",
          color: screen === 0 ? "white" : "black"
        }}>1</div>
        <div className='circle' style={{
          backgroundColor: screen === 1 ? "crimson" : "lightgray",
          color: screen === 1 ? "white" : "black"
        }}>2</div>
        <div className='circle' style={{
          backgroundColor: screen === 2 ? "crimson" : "lightgray",
          color: screen === 2 ? "white" : "black"
        }}>3</div>
      </div>

      <div><p style={{
        textAlign:"center",
        color:"lightgray"
      }}>{motivationSentence[screen]}</p></div>

      <div className='btn' style={{
        display:"flex",
        justifyContent:"space-around",
        
      }}>
        <button onClick={PreviousHandler}>Previous</button>
        <button onClick={nextHandler}>Next</button>
      </div>
        </div>
    </>
  )
}

export default App
