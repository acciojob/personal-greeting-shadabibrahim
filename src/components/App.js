
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name,setName] = useState("");
  return (
    <div>
        {/* Do not remove the main div */}
        <label>Enter your name:</label>
        <input type="text" onChange={(e)=>setName(e.target.value)}/>
        <p>Hello {name}!</p>
    </div>
  )
}

export default App
