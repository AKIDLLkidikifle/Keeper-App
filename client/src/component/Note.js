import React from "react";
import {useWorkoutsContext} from "../hooks/useWorkoutcontext";

function Note(props){

    const { dispatch } = useWorkoutsContext();

    const handleClick = async()=>{
        
         const response = await fetch("/api/notes/" + props.id, {
            method: 'DELETE'
         });
         const json = await  response.json();

         if(response.ok){
             dispatch({type: 'DELETE_NOTES', payload: json});
         }
    }

    return(
        <div>
         <div className="note"> 
            <h1>{props.header}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>DELETE</button>
         </div>
    </div>
    )
}

export default Note;