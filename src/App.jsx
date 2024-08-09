import { useState } from 'react'
import './App.css'

function App() {
  const[height, setHeight]=useState("")
  const[weight, setWeight]=useState("")
  const[bmi, setBmi]=useState(null)
  const[bmiStatus, setBmiStatus]=useState("")
  const[errorMessage, setErrorMessage]=useState("")

  const calculatebmi=()=>{
    const isValidHeight=/^\d+$/.test(height)
    const isValidWeight=/^\d+$/.test(weight)

    if (isValidHeight && isValidWeight){
      const heightInMeters= height/100;
      const bmiValue= weight/(heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2))
      if(bmiValue < 18.5){
        setBmiStatus("Under Weight")
      }else if(bmiValue >=18.5 && bmiValue <=24.9){
        setBmiStatus("Normal Weight")
      }else if(bmiValue >=25 && bmiValue <=29.9){
        setBmiStatus ("Over Weight")
      }else {
        setBmiStatus("Obese")
      }
      setErrorMessage("")
      
      }else{
      setBmi(null)
      setBmiStatus("")
      setErrorMessage("please enter valid numeric value for height and weight")
    }
  }

  const clear=()=>{
    setBmi(null)
    setBmiStatus("")
    setHeight("")
    setWeight("")
  }

  return (
    <>
      <div className="container">
        <div className="box"></div>
        <div className="data">
          <h2>BMI Calculator</h2>
          <p className='error'>{errorMessage}</p>
          <div className="input-container">
            <label htmlFor="">Height (in Cms)</label>
          <input type="text" value={height} onChange={(e)=>setHeight(e.target.value)}  id="height" />
          <div className="input-container">
            <label htmlFor="">Weight (in Kg)</label>
          <input type="text" value={weight} onChange={(e)=>setWeight(e.target.value)} id="height" />
          </div>
          <button onClick={calculatebmi}>Calculate BMI</button>
          <button onClick={clear} >Clear all</button>
          {bmi!== null && <div className="result">
            <p>Your BMI Score is: {bmi}</p>
            <p>Status: {bmiStatus}</p>
          </div>}
          </div>
          </div>
      </div>
    </>
  )
}

export default App
