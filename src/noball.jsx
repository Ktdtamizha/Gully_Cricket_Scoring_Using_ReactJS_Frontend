import { useLocation } from "react-router-dom";
import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Noball()
{
    const location = useLocation();
    const navigate = useNavigate();
    const {runs,bat,bowl,over} = location.state || {};
    const[wicket,setwicket] = useState(0);
    const[target,settarget] = useState(runs+1);
    const[chase,setchase] = useState(0);
    const[balls,setballs] = useState(over*6);
    var won = "draw";
    
    const handleclick = (e) => {
        setchase(chase=>Number(chase)+Number(e.target.value));
        setballs(balls=>balls-1);
        settarget(t=>Number(t)-Number(e.target.value));    
    };

    const handlenoball = (e) => {
        const userinput = prompt(`Enter Runs Scored`);

        if(userinput >=0 && userinput <= 6) {
            setchase(r=>r+Number(userinput)+1);
        }
    }

    useEffect(
        () => {
            if(chase == runs  && balls == 0)
                {
                    won = "draw";
                    navigate("/endinnings",{state:{won}});
                }
            else if(target <= 0 && balls >=0)
            {
                won = bowl;
                navigate("/endinnings",{state:{won}});
            }
            else if(balls<=0  && target >=2)
            {
                won = bat;
                navigate("/endinnings",{state:{won}});
            }
            else if(target >=2 && wicket >9)
            {
                won = bat;
                navigate("/endinnings",{state:{won}});
            }
            else if(target == 1 && wicket ==9)
            {
                won = "draw";
                navigate("/endinnings",{state:{won}});
            }
        },[target,balls,wicket]);
        
    const handlewicket = (e) => {
        setwicket(w=>w+1);
        setballs(b=>b-1);
    }
    const handlewide = (e) => {
        setchase(runs=>runs+1);
    }

    return(
      <>
           <div className="font-Bangers mt-5 text-5xl text-center text-green-500 mb-12">
                <h1>{bowl} VS {bat}</h1>
                <h1>{bowl} Need {target} From {balls} Balls To Win </h1>
            </div>
            <br/>
            <h2 className="font-Honk text-6xl text-center text-3xl">{bowl} {chase}/{wicket} - {balls} Balls</h2>
            <div class="flex flex-wrap rounded-xl bg-gray-400 max-w-md mx-auto mt-20 font-Knewave">
                <div class="w-1/3">
                    <button onClick={handleclick} value={1} class="w-full h-20 text-2xl text-gray-700 font-bold rounded-xl hover:bg-gray-300">1</button>
                </div>
                <div class="w-1/3">
                    <button onClick={handleclick} value={2} class="w-full h-20 text-2xl text-gray-700 font-bold rounded-xl hover:bg-gray-300">2</button>
                </div>
                <div class="w-1/3">
                    <button onClick={handleclick} value={3} class="w-full h-20 text-2xl text-gray-700 font-bold rounded-xl hover:bg-gray-300">3</button>
                </div>
                <div class="w-1/3">
                    <button onClick={handleclick} value={4} class="w-full h-20 text-2xl text-gray-700 font-bold rounded-xl hover:bg-gray-300">4</button>
                </div>
                <div class="w-1/3">
                    <button onClick={handleclick} value={5} class="w-full h-20 text-2xl text-gray-700 font-bold rounded-xl hover:bg-gray-300">5</button>
                </div>
                <div class="w-1/3">
                    <button onClick={handleclick} value={6} class="w-full h-20 text-2xl text-gray-700 font-bold rounded-xl hover:bg-gray-300">6</button>
                </div>
                <div class="w-1/2">
                    <button onClick={handleclick} value={0} class="w-full h-20 text-2xl text-gray-700 font-bold rounded-xl hover:bg-gray-300">DOT</button>
                </div>
                <div class="w-1/2">
                    <button onClick={handlewicket} class="w-full h-20 text-2xl text-gray-700 font-bold rounded-xl hover:bg-gray-300">Wicket</button>
                </div>
                <div class="w-1/2">
                    <button onClick={handlenoball} class="w-full h-20 text-2xl text-gray-700 font-bold rounded-xl hover:bg-gray-300">Noball</button>
                </div>
                <div class="w-1/2">
                    <button  value={1} onClick={handlewide} class="w-full h-20 text-2xl text-gray-700 font-bold rounded-xl hover:bg-gray-300">Wide</button>
                </div>
        </div>
      </>
    );

}

export default Noball;