import mongoose from "mongoose"
import { config } from "./config.js"


const connectDB = async () => {
    const mongoUri = config.mongoUri;

    try {
        await mongoose.connect(mongoUri);
    } catch (error) {
        console.error(`Error connecting to Database: ${error}`);
        process.exit(1);
    }
}

export default connectDB;