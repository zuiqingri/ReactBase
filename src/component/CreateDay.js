import { useHistory } from "react-router";
import useFetch from "../hooks/usefetch"

export default function CreateDay(){
    const days=useFetch("http://localhost:3001/days");
    const history=useHistory()
    function addDay(){
             fetch(`http://localhost:3001/days/`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    },
                    body:JSON.stringify({
                        day:days.length+1
                   }),
                   }).then(res=>{
                    if(res.ok){
                        alert("Created");
                        history.push(`/`)
                    }
                })
            }
    
    return <div>
        <h3> Current Days:{days.length}</h3>
        <button onClick={addDay}>Add Day</button>
    </div>
}