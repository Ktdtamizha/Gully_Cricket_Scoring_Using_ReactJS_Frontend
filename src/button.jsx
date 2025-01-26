import { useLocation } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Button()
{
    const location = useLocation();
    const {team1,team2,toss,choose,over} = location.state || {};
    const [runs,setruns] = useState(0);
    const [wicket,setwicket] = useState(0);
    const [content, setContent] = useState(false);
    const navigate = useNavigate();

    var bat,bowl;
    const [balls,setballs] = useState(over*6);
    
    if((toss == team1 && choose=="Bat") || (toss == team2 && choose=="Bowl"))
    {
        bat = team1;
        bowl=team2;
    }
    else{
        bat = team2;
        bowl=team1;
    }
   
    const handleclick = (e) => {
        
        setruns(runs=>Number(runs)+Number(e.target.value));
        setballs(balls=>balls-1);

        if(balls == 1)
        {
            setContent(true);
        }
        
    };

    const handlewide = (e) => {
        setruns(runs=>runs+1);
    }
    const handlewicket = (e) => {
        setwicket(w=>w+1);
        setballs(b=>b-1);
        if(wicket == 10 || balls == 1)
        {
            setContent(true);
        }
    }
    const handlenoball = (e) => {
        const userinput = prompt(`Enter Runs Scored`);

        if(userinput >=0 && userinput <= 6) {
            setruns(r=>r+Number(userinput)+1);
        }
    }
    
    const handlened = () =>
    {
        navigate("/innings2",{state:{runs,bat,bowl,over}});
    }

    return (<>
    <div style={{display:content ? 'none':'block'}}>
            <div className="font-display italic text-3xl text-center text-green-500 mb-5 font-semibold mt-5">
                <h1>{team1} VS {team2}</h1>
            
                <p className="text-center text-xl">{toss} Won the toss Choose to {choose}</p>
            </div>
            <br/>
            <h2 className="text-center text-3xl">{bat} {runs}/{wicket} - {balls} Balls</h2>
        <div class="grid grid-cols-3 grid-rows-4 gap-20 rounded-xl max-w-md mx-auto mt-24">
            <div class="btn btn-circle bg-indigo-900 hover:bg-indigo-600">
                <button onClick={handleclick} value={1} class="text-2xl text-white-700 font-bold rounded-xl">1</button>
            </div>
            <div class="btn btn-circle bg-indigo-900 hover:bg-indigo-600">
                <button onClick={handleclick} value={2} class="text-2xl text-white-700 font-bold rounded-xl">2</button>
            </div>
            <div class="btn btn-circle bg-indigo-900 hover:bg-indigo-600">
                <button onClick={handleclick} value={3} class=" text-2xl text-white-700 font-bold rounded-xl">3</button>
            </div>
            <div class="btn btn-circle bg-indigo-900 hover:bg-indigo-600">
                <button onClick={handleclick} value={4} class=" text-2xl text-white-700 font-bold rounded-xl">4</button>
            </div>
            <div class="btn btn-circle bg-indigo-900 hover:bg-indigo-600">
                <button onClick={handleclick} value={5} class=" text-2xl text-white-700 font-bold rounded-xl">5</button>
            </div>
            <div class="btn btn-circle bg-indigo-900 hover:bg-indigo-600">
                <button onClick={handleclick} value={6} class=" text-2xl text-white-700 font-bold rounded-xl">6</button>
            </div>
            <div class="btn btn-circle bg-indigo-900 hover:bg-indigo-600">
                <button onClick={handlewicket} class=" text-2xl text-white-700 font-bold rounded-xl">W</button>
            </div>
            <div class="btn btn-circle bg-indigo-900 hover:bg-indigo-600">
                <button onClick={handlenoball} class=" text-2xl text-white-700 font-bold rounded-xl">NB</button>
            </div>
            <div class="btn btn-circle bg-indigo-900 hover:bg-indigo-600">
                <button onClick={handlewide} value={1} class=" text-2xl text-white-700 font-bold rounded-xl">WD</button>
            </div>
            <div class="btn btn-circle col-start-2 col-end-3 bg-indigo-900 hover:bg-indigo-600">
                <button onClick={handleclick} value={0} class=" text-2xl text-white-700 font-bold rounded-xl">0</button>
            </div>
        </div>
</div>
    <div class="grid grid-col-4 mt-10 pr-10">
    <button onClick={handlened} className=" col-start-1 col-end-2 w-full font-display italic text-3xl text-center text-green-500 mb-5 font-semibold mt-5">End Innings</button>
    </div>       
    </>)
}

export default Button;