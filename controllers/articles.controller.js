const { getDb } = require("../utils/dbconnect")

module.exports.getAllArticls = (req, res) => {
    res.send("get all data successfully")
}

module.exports.saveArticle = async(req,res)=>{
    const db = getDb();
    const item = req.body();
    const result = await db.collection("articls").insertOne(item);
    res.send(result);

    res.send("post save successfully")
}
