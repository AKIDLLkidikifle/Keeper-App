const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/routes");

const app = express();

app.use(express.json());

app.use("/api/notes", router);

mongoose.connect("mongodb://localhost:27017/mern").then(()=>{
    app.listen(8000, ()=>{
        console.log("db is connected and server is running on port nuber 8000");
    });
}).catch((error)=>{
    console.log(error.message);
});

