import express, { request } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
// import { AdminModel } from "./Models/Adminmodel";
import adminRoute from "./Routes/Adminroutes.js";
const app = express();

dotenv.config();
import cors from "cors";

const PORT = process.env.PORT || 3000;
const MONGOURL = process.env.MONGO_URL;
console.log(PORT);

// app.use(
//   cors({
//     origin: 'https://master--abcxxxx.netlify.app',
//     methods: ['GET' , 'POST' ,'PUT' , 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// )
//-- post resq

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/admin", adminRoute);
//--
app.get("/", (req, res) => {
  console.log(req);
  res.status(234).send("WELCOME");
});

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("app connected to db");
    app.listen(PORT, (req, res) => {
      console.log("Server is running on port " + PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// everything ok
