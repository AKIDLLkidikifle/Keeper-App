import React, {useState} from "react";

function CreateArea(props){
    const [note, setnote] = useState({
        title:"",
        content:""
    });

    function changeHandle(event){
        const{name, value} = event.target;

        setnote(function(prevValue){
           return  {
            ...prevValue,
            [name]: value
            }
        }) 
    }

    function handleOnclick(event){
        event.preventDefault();
        props.addNote(note);
        setnote({
            title:"",
            content:""
        });
    }

    return(
        <div>
          <form >
             <input onChange={changeHandle} name="title" placeholder="Title" value={note.title}/>
             <textarea onChange={changeHandle} name="content" placeholder="Take a note..." rows="3" value={note.content}/>
             <button onClick={handleOnclick}>Add</button>
          </form>
      </div>
    )
}

export default CreateArea;