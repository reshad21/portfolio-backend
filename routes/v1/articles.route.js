const express = require("express");
const articleController = require("../../controllers/articles.controller");
const router = express.Router();

router
    .route("/")
    .get(articleController.getAllArticls)
    .post(articleController.saveArticle)

router
    .route("/:id")
    // .get(articleController.getArticleDetail)
    .patch(articleController.updateArticle)
    .delete(articleController.deleteArticle)

module.exports = router;