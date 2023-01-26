import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Alert from './components/alert';   //will on this part later
import About from './components/About';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light');

  // const [alert, setalert] = useState(null); |

  // const showAlert = ()=>{  };               |  //will on this part later



  const toggleMode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
    }
    else {
      setmode("dark");
      document.body.style.backgroundColor = "#2f3241"
      document.body.style.color = "white"

    }
  };

  return (
    <>
      <Router>

        <Navbar title="Worditor" mode={mode} toggleMode={toggleMode} />
              
              

        <div className="class my-3">
          <Routes>
        <Route path="/" element={<TextForm heading=" Start writing Your Text form here" mode={mode} />} />
        <Route path="about" element={<About toggleMode={toggleMode} mode={mode} />} />
            
          </Routes>

        </div>

      </Router>


    </>
  )

}

export default App;
