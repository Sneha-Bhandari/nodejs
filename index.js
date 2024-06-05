const express = require("express"); //commonjs way
const dotenv = require("dotenv").config();
//const router=require("./routes/userRoute.js");
const router=require("./routes/studentRoute.js");
const db = require("./config/db.js");
const bodyParser = require('body-parser');



const app= express();
const port= process.env.PORT||5001 ;

app.get('/', (req,res)=>{
    res.send("Welcome to the backend")
    // res.json({message:"All details of users",data:"this is a data"})
})



// userRoute Middleware
//bodyparser chai jason ma convert garna use garxam
app.use(bodyParser.json());



// api for user

app.use('/api/user', require("./routes/userRoute.js"))
//api for student
app.use('/api/student', require("./routes/studentRoute.js"))


db.query('SELECT 1').then((data) =>{
 console.log("database connection succeeded!!");
}).catch((error)=>{
   console.log(error);
})



app.listen(port, ()=> {
    //console.log(Server is running port: ${port})
    console.log(`Server is running port: http://localhost:${port}`);

})