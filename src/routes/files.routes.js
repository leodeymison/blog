const express = require("express");
const router = express.Router();
const path = require("path")
const initial_path = require("../config/public")

router.get("/", (req, res) => {
    res.sendFile(path.join(initial_path, "home.html"))
})
router.get("/:id", (req, res) => {
    res.sendFile(path.join(initial_path, "article.html"))
})

module.exports = router;
