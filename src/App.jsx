import Teams from "./teams"
import Button from "./button"
import React  from "react"; 
import Noball from "./noball";
import EndInnings from "./endinnings";
import Show from "./show";
import UpdateTeam from "./updateteam";


import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Teams/>}></Route>
        <Route path="/display" element={<Button/>}></Route>
        <Route path="/innings2" element={<Noball/>}></Route>
        <Route path="/endinnings" element={<EndInnings/>}></Route>
        <Route path="/show" element={<Show/>}></Route>
        <Route path="/updateteam/:id" element={<UpdateTeam/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
