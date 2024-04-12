import { config } from "./config";
import mongoose from "mongoose";

// function

// as string means typecast it
const connectDB = async () => {
  try {

   mongoose.connection.on('connected', () =>{
      console.log("Connected to database  successfully ");
      
  })
  
  // handle future error 
  mongoose.connection.on('error', (err) =>{
      console.log("Error in connnecting to database", err);
      
  })


    await mongoose.connect(config.databaseURL as string);

   


    

  } catch (error) {

    console.log("Failed to connect database", error);
    // stop the server without database 
    process.exit(1)


  }
};

export default connectDB;