import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import morgan from "morgan";
import authRouter from "./routes/auth.routes.js";

dotenv.config();

const app = express();


app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to the Snitch API" });
});

app.use("/api/auth", authRouter);

export default app;