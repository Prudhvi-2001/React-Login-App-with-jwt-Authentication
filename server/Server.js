import express from 'express'
const app=express();
import cors from 'cors'
import morgan  from 'morgan'; //to console all the http requests
import  connect  from './database/connection.js';
import router from './router/route.js';
//middleware
app.use(express.json())
app.use(cors())
app.use(morgan());
app.disable('x-powered-by')
const port=8000

//get request
app.get('/',(req,res)=>{
res.status(200).json("Home GET Request")
})
//start the server when we have valid connection
// api routes
app.use('/api',router)
connect().then(()=>{
    try{
        app.listen(port,()=>{
            console.log(`Server is started at the port ${port}`)
        })
    }
    catch(error){

        console.log(error)
    }
})
.catch(()=>{
    console.log("Invalid connection")
})
