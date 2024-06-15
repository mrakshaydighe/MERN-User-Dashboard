import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from "dotenv"
import route from "./routes/routes.js";
import bodyParser from "body-parser";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api",route)
app.use(bodyParser.json())
dotenv.config();

const MongoURI = process.env.MongoURI
const PORT = process.env.PORT || 4000


mongoose.connect(MongoURI).then(() => {

    console.log(`Connected to DB`)

    app.listen(PORT, () => {
        console.log(`server is runiing on ${PORT}`)
    })

}).catch(err => console.log(err))

