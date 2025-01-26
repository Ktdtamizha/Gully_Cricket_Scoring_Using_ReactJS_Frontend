import { useLocation } from "react-router-dom";

function EndInnings()
{
    const location = useLocation();
    const {won} = location.state || {};
    if(won == "draw")
    {
        return (<>
            <h1 className="font-display italic text-3xl text-center text-green-500 mb-5 font-semibold mt-5">Match Draw !!!!</h1>
        </>);
    }
    else{
        return (
            <>
            <h1 className="font-display italic text-3xl text-center text-green-500 mb-5 font-semibold mt-5">Won by {won}</h1>
            </>
        );
    }
}

export default EndInnings;