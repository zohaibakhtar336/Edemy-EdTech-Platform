import mongoose from "mongoose";

// Connect to the mongoDB 
const connectDB = async () => {
  mongoose.connection.on('connected', () => {
    console.log("Database connection established")
  });

  await mongoose.connect(`${process.env.MONGODB_URI}/lms`)
};

export default connectDB;
