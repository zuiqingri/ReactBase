//import dummy from "../db/data.json";
import { useParams } from "react-router";
import useFetch from "../hooks/usefetch";
import Word from "./Word";

export default function Day(){
    const {day}=useParams();
    
    const words=useFetch(`http://localhost:3001/words?day=${day}`)
    return(
        <>
        <h2>Day {day}</h2>
        {words.length===0 && <span>Loading...</span>}
    <table>
        <tbody>
            {words.map(word=>(
              <Word word={word} key={word.id}/>
            ))}
        </tbody>
    </table>
    </>
    )
}