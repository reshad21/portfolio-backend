const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/dbconnect")

module.exports.getAllArticls = async (req, res) => {
  try {
    const db = getDb();
    const result = await db.collection("blog").find({}).toArray();
    // res.send(result);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.log(error);
  }
}


module.exports.getArticleDetail = async (req, res, next) => {
  try {
    const db = getDb();
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, error: "Not a valid blog id." });
    }

    const blog = await db.collection("blog").findOne({ _id: ObjectId(id) });

    if (!blog) {
      return res.status(400).json({ success: false, error: "Couldn't find a blog with this id" });
    }

    res.status(200).json({ success: true, data: blog });

  } catch (error) {
    next(error);
  }
};

module.exports.saveArticle = async (req, res, next) => {
  try {
    const db = getDb();
    const item = req.body;
    const result = await db.collection("blog").insertOne(item);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
}

module.exports.deleteArticle = async (req, res, next) => {
  try {
    const db = getDb();
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, error: "Not a valid blog id." });
    }

    const blog = await db.collection("blog").deleteOne({ _id: ObjectId(id) });

    if (!blog.deletedCount) {
      return res.status(400).json({ success: false, error: "Couldn't delete the blog" });
    }

    res.status(200).json({ success: true, message: "Successfully deleted the blog" });
  } catch (error) {
    next(error);
  }
}


module.exports.updateArticle = async (req, res, next) => {
  try {
    const db = getDb();
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, error: "Not a valid blog id." });
    }

    const blog = await db.collection("blog").updateOne({ _id: ObjectId(id) }, { $set: req.body });

    if (!blog.modifiedCount) {
      return res.status(400).json({ success: false, error: "Couldn't update the blog" });
    }

    res.status(200).json({ success: true, message: "Successfully updated the blog" });
  } catch (error) {
    next(error);
  }
};
