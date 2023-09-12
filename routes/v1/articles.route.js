const express = require("express");
const articleController = require("../../controllers/articles.controller");
const router = express.Router();

router
    .route("/")
    .get(articleController.getAllArticls)
    .post(articleController.saveArticle)


module.exports = router;