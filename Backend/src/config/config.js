import dotenv from 'dotenv';
dotenv.config();

if (!process.env.MONGO_URI) {
    console.error("MONGO_URI is not defined");
    process.exit(1);
}

if(!process.env.JWT_SECRET) {
    console.error("JWT_SECRET is not defined");
    process.exit(1);
}

export const config = {
    mongoUri: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET
}