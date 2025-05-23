import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import connection from "./Config/db.js";
import authRouter from "./Routes/userRoutes.js";
dotenv.config()
const app= express();
app.use(express.json())
app.use(cors());
let port =process.env.PORT
app.get("/", (req, res) => {
  res.status(200).send(`Welcome to fathommarineconsultants-full-stack-engineer-42fa  backend `);
});

app.use("/api",authRouter)
app.listen(port,()=>{
    try {
         console.log(`port is running at http://localhost:${port}`);
         connection()
    } catch (error) {
        console.log(error,"Index.js Error")
    }
})