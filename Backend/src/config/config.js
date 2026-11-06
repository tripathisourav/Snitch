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

if(!process.env.CLIENT_ID) {
    console.error("CLIENT_ID is not defined");
    process.exit(1);
}

if(!process.env.CLIENT_SECRET) {
    console.error("CLIENT_SECRET is not defined");
    process.exit(1);
}

if(!process.env.IMAGEKIT_PRIVATE_KEY) {
    console.error("IMAGEKIT_PRIVATE_KEY is not defined");
    process.exit(1);
}

export const config = {
    mongoUri: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    GOOGLE_CLIENT_ID: process.env.CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.CLIENT_SECRET,
    Imagekit_private_Key: process.env.IMAGEKIT_PRIVATE_KEY,
    NODE_ENV: process.env.NODE_ENV || "development",
}