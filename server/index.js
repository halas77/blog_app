import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRoute from "./routes/user.route.js"
import authRoute from "./routes/auth.route.js"



dotenv.config();
const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Database is connected..");
  })
  .catch((err) => {
    console.log(err);
  });


app.use('/api/user', UserRoute) 
app.use('/api/auth', authRoute)


app.listen(3000, () => {
  console.log("Server is running in 3000");
});
