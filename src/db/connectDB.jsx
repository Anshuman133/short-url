import mongoose from "mongoose";

async function connectDB() {
    return mongoose.connect(process.env.MONGODB_URL);
    
}
export default connectDB