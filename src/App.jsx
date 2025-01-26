import Teams from "./teams"
import Button from "./button"
import React  from "react"; 
import Noball from "./noball";
import EndInnings from "./endinnings";


import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Teams/>}></Route>
        <Route path="/display" element={<Button/>}></Route>
        <Route path="/innings2" element={<Noball/>}></Route>
        <Route path="/endinnings" element={<EndInnings/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
