import express from 'express';
import dotenv from "dotenv";
import Connection from "./database/db.js";
import defaultData from './default.js';
import route from './routes/routes.js';
import cors from 'cors';    
dotenv.config();
const app = express();
app.use(cors());
app.use('/',route);
const PORT = 8000;
Connection();
app.listen(PORT,()=>{
    console.log("Server is running on port",PORT);
})

defaultData();
