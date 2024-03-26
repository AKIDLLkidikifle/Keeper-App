import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Note from "./Note";


function App() {
  const[notes, setnotes] = useState([])

  function recieveNote(newnote){
       setnotes((prevValue)=>{
          return[...prevValue, newnote];
       })
       
  }

  function deleteItem(id){
       console.log("i am ready to be deleted");
       setnotes((prevValue)=>{
         return prevValue.filter((element, index)=>{
           return index!==id;
         })
       })
  }

  return (
    <div>
      <Header />
      <CreateArea  addNote={recieveNote}/>
      {notes.map((element, index)=>{
         return <Note key={index} id={index} header={element.title} content={element.content} ondelete={deleteItem}/>
      })}  
      <Footer />
    </div>
  );
}

export default App;
