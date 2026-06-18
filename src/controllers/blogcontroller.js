import Blog from "../model/Blog.js";
import ApiError from "../utils/apiError.js";

export const createBlog = async (req, res, next) => {
  try {
    const { title, content, coverImage } = req.body;

    const blog = await Blog.create({
      title,
      content,
      coverImage,
      author: req.user._id,
    });

    res.status(201).json({
      success: true,
      blog,
    });
  } catch (error) {
    next(error);
  }
};

export const getBlogById = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id).populate(
      "author",
      "username email",
    );

    if (!blog) {
      throw new ApiError(404, "Blog not found");
    }

    res.status(200).json({
      success: true,
      blog,
    });
  } catch (error) {
    next(error);
  }
};

export const updateBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      throw new ApiError(404, "Blog not found");
    }

    if (blog.author.toString() !== req.user._id.toString()) {
      throw new ApiError(403, "Not authorized");
    }

    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      blog: updatedBlog,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      throw new ApiError(404, "Blog not found");
    }

    if (blog.author.toString() !== req.user._id.toString()) {
      throw new ApiError(403, "Not authorized");
    }

    await blog.deleteOne();

    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
export const getBlogs = async (req, res, next) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const search = req.query.search || "";

    const query = {
      title: {
        $regex: search,
        $options: "i",
      },
    };

    const totalBlogs = await Blog.countDocuments(query);

    const blogs = await Blog.find(query)
      .populate("author", "username email")
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    res.status(200).json({
      success: true,
      currentPage: page,
      totalPages: Math.ceil(totalBlogs / limit),
      totalBlogs,
      blogs,
    });
  } catch (error) {
    next(error);
  }
};
