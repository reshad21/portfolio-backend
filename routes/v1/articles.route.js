const express = require("express");
const router = express.Router();

router.post("/blog", async (req, res) => {
    try {
        const item = req.body;
        const result = await articlsCollection.insertOne(item);
        res.status(200).json({ success: true, data: result });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: "An error occurred" })
    }
})