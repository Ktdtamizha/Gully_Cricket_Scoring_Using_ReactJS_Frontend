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
    const [balls,setballs] = useState(over*6);
    const navigate = useNavigate();

    var bat,bowl;
    
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
        <div >
            <div className="font-Bangers text-5xl text-center text-green-400 mb-5 mt-5">
                <h1>{team1} VS {team2}</h1>
            
                <p className="">{toss} Won the toss Choose to {choose}</p>
            </div>
            <br/>
            <h2 className="font-Honk text-6xl text-center text-3xl mt-4">({bat}) {runs}/{wicket} - {balls} Balls</h2>
            <div class="flex flex-wrap rounded-xl bg-gray-400 max-w-md mx-auto mt-16 font-Knewave">
                <div class="w-1/3">
                    <button onClick={handleclick} value={1} class="w-full h-20 text-2xl text-gray-700 font-bold rounded-xl hover:bg-gray-300">1</button>
                </div>
                <div class=" w-1/3">
                    <button onClick={handleclick} value={2} class="w-full h-20 text-2xl text-gray-700 font-bold rounded-xl hover:bg-gray-300">2</button>
                </div>
                <div class="  w-1/3">
                    <button onClick={handleclick} value={3} class=" w-full h-20 text-2xl text-gray-700 font-bold rounded-xl hover:bg-gray-300">3</button>
                </div>
                <div class="  w-1/3">
                    <button onClick={handleclick} value={4} class=" w-full h-20 text-2xl text-gray-700 font-bold rounded-xl hover:bg-gray-300">4</button>
                </div>
                <div class="  w-1/3">
                    <button onClick={handleclick} value={5} class=" w-full h-20 text-2xl text-gray-700 font-bold rounded-xl hover:bg-gray-300">5</button>
                </div>
                <div class="  w-1/3">
                    <button onClick={handleclick} value={6} class=" w-full h-20 text-2xl text-gray-700 font-bold rounded-xl hover:bg-gray-300">6</button>
                </div>
                <div class=" w-1/3">
                    <button onClick={handleclick} value={0} class=" w-full h-20 text-2xl text-gray-700 font-bold rounded-xl hover:bg-gray-300">0</button>
                </div>
                <div class="  w-1/3">
                    <button onClick={handlenoball} class=" w-full h-20 text-2xl text-gray-700 font-bold rounded-xl hover:bg-gray-300">NB</button>
                </div>
                <div class=" w-1/3">
                    <button onClick={handlewide} value={1} class=" w-full h-20 text-2xl text-gray-700 font-bold rounded-xl hover:bg-gray-300">WD</button>
                </div>
                <div class="w-96 pl-16">
                    <button onClick={handlewicket} class=" w-full h-20 text-2xl text-gray-700 font-bold rounded-xl hover:bg-gray-300">WICKET</button>
                </div>
        </div>
    </div>
</div>
    <div class="grid grid-col-4 mt-10 pr-10">
    <button onClick={handlened} className=" mr-28 col-start-2 col-end-2 text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 max-w-64">End Innings</button>
    </div>       
    </>)
}

export default Button;