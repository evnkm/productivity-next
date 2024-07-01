import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectToDB = async () => {
    console.log("HERE IS THE MONGO URI", process.env.MONGODB_URI);
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log("MongoDB is already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "trace",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        isConnected = true;
        console.log("MongoDB connected successfully");

    } catch (error) {
        console.log(error);
    }
}