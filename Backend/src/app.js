import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import morgan from "morgan";
// import cors from "cors";
import authRouter from "./routes/auth.routes.js";
import productRouter from "./routes/product.routes.js";
import passport from "passport";
import {Strategy as GoogleStrategy} from "passport-google-oauth20";
import {config} from "./config/config.js";

dotenv.config();

const app = express();
// app.use(cors({
//     origin: process.env.FRONTEND_URL,
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
// }));


app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

passport.use(new GoogleStrategy({
    clientID: config.GOOGLE_CLIENT_ID,
    clientSecret: config.GOOGLE_CLIENT_SECRET,
    callbackURL: "/api/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
    // Handle user authentication logic here
    return done(null, profile);
}));

app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to the Snitch API" });
});

app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
export default app;