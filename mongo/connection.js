import mongoose from "mongoose";

const mongoconnection = mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb+srv://achyut:Matanepali123@fatafat.xkkhd.mongodb.net/fastify?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    }
  )
  .then((res) => console.log("Connection Successfull"));

export default mongoconnection;
