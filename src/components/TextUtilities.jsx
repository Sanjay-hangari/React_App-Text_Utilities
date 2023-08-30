import React, { useState } from 'react'

export default function TextUtility(props) {

  const [text, settext] = useState("enter the text")

  const change=()=>{
    let newtext=text.toUpperCase();
    settext(newtext);
    props.showAlert("Converted to uppercase","success")
  }

  const changel=()=>{
    let newtext=text.toLowerCase();
    settext(newtext);
    props.showAlert("Converted to Lowercase","success")
  }

  const changec=()=>{
    settext("");
  }

  const textChange=(event)=>{
    settext(event.target.value);
  }

    
  return (
    <div className="container">
    <div className="form-floating my-4">
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={textChange} id="mybox" rows="8" style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
        <button type="button" onClick={change} className="btn btn-primary my-3" >Convert to uppercase</button>
        <button type="button" onClick={changel} className="btn btn-primary my-3 mx-2" >Convert to lowercase</button>
        <button type="button" onClick={changec} className="btn btn-primary my-3 mx-1" >Clear</button>
    </div>
    <div className="container">
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </div>
  );
}
