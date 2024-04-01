import React, {useEffect} from "react";
import CreateArea from "../component/CreateArea";
import Note from "../component/Note";
import { useWorkoutsContext } from "../hooks/useWorkoutcontext";


function Home() {
  const {notes, dispatch} = useWorkoutsContext();

  useEffect(()=>{
      const fetchWorkouts = async()=>{
          const response = await  fetch("/api/notes");
          const json = await response.json();

          if(response.ok){
              dispatch({type: "SET_NOTES", payload: json})
          }

      }

      fetchWorkouts();

  },[dispatch])

  return (
    <div>
      <CreateArea />
      {notes && notes.map((element)=>{
         return <Note key={element._id} id={element._id} header={element.title} content={element.content} />
      })}  
    </div>
  );
}

export default Home;
