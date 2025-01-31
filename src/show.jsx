import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Show() {
    const [team, setTeam] = useState([]);
    const navigate = useNavigate()

    const navhome = () =>
    {
        navigate('/');
    }

    useEffect(() => {
        axios.get("http://localhost:3000")
            .then((res) => setTeam(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
            <h1 className="text-3xl font-bold mb-6">Match Results</h1>
            <div className="w-full max-w-4xl overflow-x-auto">
                <table className="w-full border-collapse border border-gray-700 text-center">
                    <thead>
                        <tr className="bg-gray-800 text-white">
                            <th className="border border-gray-600 px-4 py-2">Team 1</th>
                            <th className="border border-gray-600 px-4 py-2">Team 2</th>
                            <th className="border border-gray-600 px-4 py-2">Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {team.length > 0 ? (
                            team.map((t) => (
                                <tr key={t._id} className="bg-gray-700 hover:bg-gray-600 transition">
                                    <td className="border border-gray-600 px-4 py-2">{t.team1}</td>
                                    <td className="border border-gray-600 px-4 py-2">{t.team2}</td>
                                    <td className="border border-gray-600 px-4 py-2">{t.result}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="border border-gray-600 px-4 py-2 text-gray-400">
                                    No results found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <button onClick={navhome} className="btn btn-secondary mt-6 ml-6">Home</button>
        </div>
    );
}

export default Show;
