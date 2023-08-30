import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextUtility from './components/TextUtilities';
import React, { useState } from 'react';

function App() {

  const [mode, setmode] = useState('light')

  const [alert, setalert] = useState(null)

  const showAlert=(message,type)=>{
    setalert({
        msg:message,
        type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 3000);
  }

  const toggle=()=>{
    if(mode==='light')
    {
      setmode('dark')
      document.body.style.backgroundColor="black";
      document.body.style.color="white";
      showAlert("Dark mode enabledd","Success")
    }

    else{
      setmode('light')
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert("Light mode enabledd","Success")
    }
  }

  return (
   <>
    <Navbar heading="Text Utility" mode={mode} toggle={toggle}/>
    <Alert alert={alert}/>
    <TextUtility heading="Enter the text"  mode={mode} showAlert={showAlert}/>
   </>
  );
}

export default App;
