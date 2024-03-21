import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes  from "../notes";


function App() {
  return (
    <div>
      <Header />
      {Notes.map(function(element){
           return(
               <Note  key={element.key}  title={element.title}  content={element.content}/>
           )
      })}
      <Footer />
    </div>
  );
}

export default App;
