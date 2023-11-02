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
