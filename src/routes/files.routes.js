const express = require("express");
const router = express.Router();
const path = require("path")
const initial_path = require("../config/public")

router.get("/", (req, res) => {
    res.sendFile(path.join(initial_path, "/html/home.html"))
})
router.get("/:id", (req, res) => {
    res.sendFile(path.join(initial_path, "/html/article.html"))
})
router.get("/admin/login", (req, res) => {
    res.sendFile(path.join(initial_path, "/html/admin/login.html"))
})
router.get("/admin/article", (req, res) => {
    res.sendFile(path.join(initial_path, "/html/admin/article-list.html"))
})
router.get("/admin/article/create", (req, res) => {
    res.sendFile(path.join(initial_path, "/html/admin/article-create.html"))
})
router.get("/admin/article/edit/:id", (req, res) => {
    res.sendFile(path.join(initial_path, "/html/admin/article-edit.html"))
})

module.exports = router;
