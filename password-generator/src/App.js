import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import {LC, UC,NC,SC} from './DATA/PassChar.jsx'

function App() {

let [uppercase , setUppercase] = useState(false)
let [lowercase , setLowercase] = useState(false)
let [number , setNumber] = useState(false)
let [symbols , setSymbols] = useState(false)
let [passwordlen, setpasswordLen] = useState(10)
let [fPass,setPass] = useState('')


let createPassword = ()=> {
  let finalPass=''
  let charSet=''
  if(uppercase || lowercase || number || symbols){
     if(uppercase) charSet+=UC;
     if(lowercase) charSet+= LC;
     if(number) charSet+=NC;
     if(symbols) charSet+=SC;
     
     for(let i=0;i<passwordlen;i++){
      finalPass+=charSet.charAt( Math.floor(Math.random()*charSet.length) )
     }     
    setPass(finalPass)
     
  }
  else{
    alert("Please one checkBox!....")
  }
}

let copyPass =() => {
  navigator.clipboard.writeText(fPass)    
}

  return (
    <>
      <div className="passwordBox">
        <h2>Password Generator</h2>

        <div className="passwordBoxin">
          <input type="text" readOnly  value={fPass}/>
          <button onClick={copyPass}>Copy</button>
        </div>

        <div className="passlength">
          <label>Password Length</label>
          <input type="number" max={20} min={10} value={passwordlen}
          onChange={(event)=> setpasswordLen(event.target.value)} 
          
          />
        </div>

        <div className="passlength">
          <label>Include uppercase letters</label>
          <input type="checkbox"  checked={uppercase} onChange={()=>setUppercase(!uppercase)} />
        </div>

        <div className="passlength">
          <label>Include lowercase letters</label>
          <input type="checkbox" checked={lowercase} onChange={()=>setLowercase(!lowercase)} />
        </div>

        <div className="passlength">
          <label>Include numbers</label>
          <input type="checkbox" checked={number} onChange={()=>setNumber(!number)} />
        </div>

        <div className="passlength">
          <label>Include symbols</label>
          <input type="checkbox" checked={symbols} onChange={()=>setSymbols(!symbols)} />
        </div>

           <button className="btn" onClick={createPassword}>Generate Password</button>

      </div>
    </>
  );
}

export default App;
