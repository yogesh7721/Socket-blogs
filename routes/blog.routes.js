


const { getAllBlog, createBlog, updateBlog, deleteBlog } = require("../controllers/blog.controller")

const router = require("express").Router()

router
    .get("/", getAllBlog)
    .post("/add", createBlog)
    .put("/update/:id", updateBlog)
    .delete("/delete/:id", deleteBlog)

module.exports = router
