import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EndInnings()
{
    const location = useLocation();
    const {won,bat,bowl} = location.state || {};
    const result = won;
    const team1 = bat;
    const team2 = bowl;
    const navigate = useNavigate();


    const showres = (e) => {
        e.preventDefault(); 
        axios.post("http://localhost:3000", { team1, team2, result })
            .then(() => {
                console.log("Data posted successfully!");
                navigate('/show'); 
            })
            .catch(err => console.error("Error posting data:", err));
    };
    return (<>
                <div className="w-screen h-screen flex flex-col justify-center items-center bg-black dark:bg-white">
            <h1 className="relative w-full xl:text-9xl md:text-8xl text-5xl sm:tracking-[17px] tracking-[10px] uppercase text-center leading-[0.70em] outline-none animate-dimlight box-reflect">
                {won === "Draw" ? "Match Draw!!!" : `Result By ${won}`}
            </h1>
            <button onClick={showres} className="btn btn-primary mt-4">View Results</button>
        </div>          
            </>
        );
}

export default EndInnings;