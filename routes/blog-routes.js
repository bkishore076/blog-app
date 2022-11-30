import express from "express";
import getAllBlogs, { addBlog, deleteBlog, getById, getByUserId, UpdateBlog } from "../controllers/blog.js";
const blogRouter = express.Router();
blogRouter.get("/", getAllBlogs);
blogRouter.post("/add",addBlog)
blogRouter.put("/update/:id",UpdateBlog)
blogRouter.get("/:id",getById)
blogRouter.delete("/:id",deleteBlog)
blogRouter.get("/user/:id",getByUserId)
export default blogRouter;
