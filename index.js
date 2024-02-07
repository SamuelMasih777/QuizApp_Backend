const express = require("express");
const cors = require("cors");
const quizRouter = require('./router/quiz.router')
const {loginRouter,signupRouter} = require('./router/auth.router');
const routeNotFound = require('./middleware/routeNotFound')
const categoriesRouter = require("./router/categories.router");
const quizzes = require('./db/quizzes')
require("dotenv").config();


const app = express();//creating server
app.use(cors());
app.use(express.json());
const PORT = 3000;

app.get("/",(req,res)=>{
    res.send("Hellow Samuel");
})
app.use("/categories", categoriesRouter)
app.use("/quiz", quizRouter);
app.use("/auth/login",loginRouter)
app.use("/auth/signup",signupRouter)
app.use(routeNotFound);

app.listen(process.env.PORT || PORT,()=>{
    console.log(`server started ..on..${process.env.PORT?process.env.PORT:PORT}`);
})