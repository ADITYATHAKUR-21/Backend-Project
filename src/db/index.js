import mongoose from "mongoose";

const connectDB = async () => {

  try {
   await mongoose.connect(process.env.MONGOOSE_URI);
   console.log("✅ Mongose connect a mongodb");

  } catch (error) {
    console.log("❌ Mongodb connection error :", error);
    process.exit(1);

  }
}

export default connectDB
