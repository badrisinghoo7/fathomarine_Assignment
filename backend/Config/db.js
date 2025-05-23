import mongoose, { Mongoose } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

let connection = async () => {
  try {
    let response = await mongoose.connect(process.env.MONGOURI);
    console.log(`MongoDb connect Successfully`);
  } catch (error) {
    console.log(error, "Config/db/js Error");
  }
};

export default connection;
