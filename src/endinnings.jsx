import { useLocation } from "react-router-dom";

function EndInnings()
{
    const location = useLocation();
    const {won} = location.state || {};
    if(won == "draw")
    {
        return (<>
            <div class="w-screen h-screen flex justify-center items-center bg-black dark:bg-white ">
                <h1
                class="relative w-full xl:text-9xl md:text-8xl text-5xl sm:tracking-[17px] tracking-[10px] uppercase text-center leading-[0.70em] outline-none animate-dimlight box-reflect">
                Match Draw!!!</h1>
            </div>
        </>);
    }
    else{
        return (
            <>
           <div class="w-screen h-screen flex justify-center items-center bg-black dark:bg-white ">
                <h1
                class="relative w-full xl:text-9xl md:text-8xl text-5xl sm:tracking-[17px] tracking-[10px] uppercase text-center leading-[0.70em] outline-none animate-dimlight box-reflect">
                Won By {won}</h1>
            </div>            </>
        );
    }
}

export default EndInnings;