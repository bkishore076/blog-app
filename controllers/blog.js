import Blog from "../model/Blog.js";

const getAllBlogs = async (req, res, next) => {
  let blogs;
  try {
    blogs = await Blog.find();
  } catch (error) {
    console.log(error);
  }

  if (!blogs) {
    return res.status(404).json({ message: "No Blogs Found" });
  }
  return res.status(200).json({ blogs });
};

export const addBlog = async (req, res, next) => {
  const { title, description, image, user } = req.body;
  const blog = new Blog({
    title,
    description,
    image,
    user,
  });

  try {
    blog.save();
  } catch (error) {
    return console.log(error);
  }
  return res.status(200).json({ blog });
};

export default getAllBlogs;

export const UpdateBlog = async (req, res, next) => {
  const { title, description } = req.body;
  const blogId = req.params.id;
  let blog;
  try {
    const blog = await Blog.findByIdAndUpdate(blogId, {
      title,
      description,
    });
  } catch (error) {
    console.log(error);
  }
  if (!blog) {
    return res.status(500).json({ message: "Unable to update the blog" });
  }
  return res.status(200).json({ blog });
};

export const getById = async (req, res, next) => {
  const id = req.params.id;
  let blog;
  try {
    blog = await Blog.findById(id);
  } catch (error) {
    console.log(error);
  }

  if (!blog) {
    return res.status(500).json({ message: "No blog found " });
  }
  return res.status(200).json({ blog });
};

export const deleteBlog = async (req, res, next) => {
  const id = req.params.id;
  let blog;
  try {
    blog = await Blog.findByIdAndRemove(id);
  } catch (error) {
    console.log(error);
  }
  if (!blog) {
    return res.status(500).json({ message: "Unable To delete the blog" });
  }
  return res.status(200).json({ message: "successfully deleted" });
};
