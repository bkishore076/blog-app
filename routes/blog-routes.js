import express from "express";
import getAllBlogs, { addBlog, deleteBlog, getById, UpdateBlog } from "../controllers/blog.js";
const blogRouter = express.Router();
blogRouter.get("/", getAllBlogs);
blogRouter.post("/add",addBlog)
blogRouter.put("/update/:id",UpdateBlog)
blogRouter.get("/:id",getById)
blogRouter.delete("/:id",deleteBlog)
export default blogRouter;
