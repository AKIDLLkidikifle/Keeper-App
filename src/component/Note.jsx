import React from "react";

function Note(props){

    return(
        <div>
         <div className="note"> 
            <h1>{props.header}</h1>
            <p>{props.content}</p>
            <button onClick={()=>{props.ondelete(props.id)}}>DELETE</button>
         </div>
    </div>
    )
}

export default Note;