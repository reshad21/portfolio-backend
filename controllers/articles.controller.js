const { getDb } = require("../utils/dbconnect")

module.exports.getAllArticls = async (req, res) => {
    const db = getDb();
    const result = await db.collection("articls").find({}).toArray();
    res.send(result);
}

module.exports.saveArticle = async (req, res, next) => {
    try {
        const db = getDb();
        const item = req.body;
        const result = await db.collection("articls").insertOne(item);
        res.status(200).json({ success: true, data: result });
    } catch (error) {
        next(error);
    }
}
