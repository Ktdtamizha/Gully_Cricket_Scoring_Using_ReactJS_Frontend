import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdateTeam() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [team1,setteam1] = useState("");
    const [team2,setteam2] = useState("");
    const [result,setresult] = useState("");

    useEffect( () => {
        axios
        .get(`http://localhost:3000${id}`)
        .then((res) => setresult(res.data.result))
        .catch((err) => console.log(err))
    },[id]);

    const handleUpdate = (e) =>{
        e.preventDefault();
        axios
        .put(`http://localhost:3000/${id}`, {team1,team2,result})
        .then(() => {
            navigate('/show');
        })
        .catch((err) => console.log(err))

    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
        <h1 className="text-3xl font-bold mb-6">Update Match Result</h1>
        <form onSubmit={handleUpdate} className="flex flex-col space-y-4">
            <label className="text-lg">Team 1</label>
            <input 
                type="text" 
                value={team1} 
                onChange={(e) => setteam1(e.target.value)} 
                className="px-4 py-2 text-black rounded-md"
                required 
            />
            <label className="text-lg">Team 2</label>
            <input 
                type="text" 
                value={team2} 
                onChange={(e) => setteam2(e.target.value)} 
                className="px-4 py-2 text-black rounded-md"
                required 
            />
            <label className="text-lg">Result</label>
            <input 
                type="text" 
                value={result} 
                onChange={(e) => setresult(e.target.value)} 
                className="px-4 py-2 text-black rounded-md"
                required 
            />
            <button type="submit" className="btn btn-primary">Update</button>
        </form>
    </div>
    )

}

export default UpdateTeam;