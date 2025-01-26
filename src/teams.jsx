import Header from "./header";
import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";

function Teams()
{
    const [team1,setteam1] = useState('');
    const [team2,setteam2] = useState('');
    const [toss,settoss] = useState('');
    const [choose,setchoose] = useState('');
    const [over,setover] = useState(0
        
    );
    const navigate = useNavigate();

    function clickhandle() {
        navigate('/display', { state: { team1, team2,toss,choose,over} });
    }

    return  <>
    
    <div className="h-screen w-screen bg-gradient-to-tr from-lime-400 via-emerald-500 to-teal-700">
        <Header/>
        <div className='font-Bangers text-xl mx-auto flex-col w-full max-w-lg flex-col rounded-md sm:p-10'>
            <div className=' flex w-full flex-col'>
                <input type="text" id="text1" placeholder="Enter your team" value={team1} onChange={(e) => {setteam1(e.target.value)}} className=" ml-16 input-rounded input-ghost-primary input"></input><br></br>
                <label className='text-3xl font-semibold ml-52 text-green-500'>VS</label><br></br>
                <input type="text" id="text2" placeholder="Enter your team" value={team2} onChange={(e) => {setteam2(e.target.value)}} className="ml-16 input-rounded input-ghost-primary input"></input><br></br>
                <div id="group1" className='flex flex-row gap-3 pl-16'>
                    <label>Toss Won By</label><br></br>
                    <input type="radio" value={team1} onChange= {(e) => {settoss(e.target.value)}} name ="group1" className="radio"></input>
                    <label>{team1}</label><br/>
                    <input type="radio" value={team2} onChange={(e) => {settoss(e.target.value)}}  name ="group1" className='radio'></input>
                    <label>{team2}</label><br/>
                </div>
                <div id="group2" className='flex flex-row gap-4 mt-5 pl-16'>
                    <label>Choose To</label>
                    <input type="radio" value="Bat" onChange={(e) => {setchoose(e.target.value)}} name='group2' className='radio'></input>
                    <label> Bat</label>
                    <input type="radio" value="Bowl" onChange={(e) => {setchoose(e.target.value)}} name='group2' className='radio'></input>
                    <label> Bowl</label><br/>
                </div>
                <div className="pt-6 pl-16">
                    <label>Enter Overs </label>
                    <input type="number" value={over} onChange={(e) => {setover(Number(e.target.value))}} className='input-ghost-primary input'></input>
                </div>
            </div>
                <button onClick={clickhandle} className="ml-40  bg-gradient-to-r from-green-400 to-green-300  p-3 rounded-full mt-5">Start Match</button>
        </div>
    </div>
    </>
}

export default Teams;