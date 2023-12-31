import express from "express"
import cors from "cors"
import mongoose from "mongoose";
import router from "./Routes/login.route.js"
import cookieparser from "cookie-parser";
import surveyrouter from "./Routes/survey.routes.js";
//import bookrouter from "./Routes/book.route.js";

const app=express();
app.use(cors({
    origin:["http://localhost:3000"],
    method:["GET","POST"],
    credentials:true
}))

app.use(express.json());
app.use(cookieparser());
app.use('/',router);
app.use('/survey',surveyrouter);

mongoose.connect('mongodb+srv://saket1:12345@cluster0.rd8tukt.mongodb.net/survey?retryWrites=true&w=majority')
.then(()=>{
    app.listen(5000,()=>{
        console.log("app is listen on port 5000 and database is connection");
    })

})
.catch((error)=>{
    console.log("error in connection mongodb with server");

})
