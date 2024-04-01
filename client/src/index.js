import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import {WorkoutsContextProvider} from "./context/workoutcontext";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render( 
     <WorkoutsContextProvider>
        <App/>
     </WorkoutsContextProvider>   
);



