import React, {useState} from "react";
import {useWorkoutsContext} from "../hooks/useWorkoutcontext";

function CreateArea(){
    const [title, settitle] = useState("");
    const [content, setcontent] = useState("");    
    const [error, seterror] = useState("");

    const {dispatch} = useWorkoutsContext();

    const HandleSubmit  = async(event)=>{
        event.preventDefault();

        const note = {title, content};
 
        const response = await fetch("/api/notes",{
            method: "POST",
            body: JSON.stringify(note),
            headers:{
               "Content-Type": "application/json"
            }
        });
        const json = await response.json();
 
        if(!response.ok){
            seterror(json.error);
        }
 
        if(response.ok){
            seterror("");
            setcontent("");
            settitle("");
            console.log("new workout is added", json);
            dispatch({type: "CREATE_NOTE", payload: json});
        }
 
     }


    return(
        <div>
          <form onSubmit={HandleSubmit}>
             <input onChange={(event)=>{settitle(event.target.value)}}  placeholder="Title" value={title}/>
             <textarea onChange={(event)=>{setcontent(event.target.value)}} placeholder="Take a note..." rows="3" value={content}/>
             <button>Add</button>
          </form>
          <div className="error">
               <p>{error && error.slice(37,100)}</p>
          </div>
      </div>
    )
}

export default CreateArea;