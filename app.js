import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js";

import router from "./routes/user-routes.js";
const app = express();
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog",blogRouter)
mongoose
  .connect(
    "mongodb+srv://admin:IMnPharJdhIP54N0@cluster0.lorjd0e.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() => console.log("conneceted to mongodb"))
  .catch((err) => console.log(err));
 