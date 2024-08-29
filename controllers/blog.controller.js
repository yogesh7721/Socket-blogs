

const asyncHandler = require("express-async-handler")
// const blogSchma = require("../model/Blog")
const { io } = require("../socket/socket")
const Blog = require("../model/Blog")


exports.getAllBlog = asyncHandler(async (req, res) => {
    const result = await Blog.find()
    res.json({ message: "Blog fetch succes", result })
})
exports.createBlog = asyncHandler(async (req, res) => {
    await Blog.create(req.body)
    const result = await Blog.find()
    io.emit("blog-create-responce", result)
    res.json({ message: "blog cratee succes" })
})
exports.updateBlog = asyncHandler(async (req, res) => {
    const { id } = req.params
    await Blog.findByIdAndUpdate(id, req.body)
    res.json({ message: "blog update succes" })
})
exports.deleteBlog = asyncHandler(async (req, res) => {
    const { id } = req.params
    await Blog.findByIdAndDelete(id)
    const result = await Blog.find()
    io.emit("blog-create-responce", result)
    res.json({ message: "blog delete succes" })
})