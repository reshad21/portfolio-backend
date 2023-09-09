const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');
const dbConnect = require('./utils/dbconnect');
const articlesRoutes = require('./routes/v1/articles.route');


// middleware
app.use(cors());
app.use(express.json());



dbConnect();

app.use("/api/v1/blog", articlesRoutes)

async function run() {
    try {
        // const db = client.db("portfolio");
        // const articlsCollection = db.collection("articls");

        // const articlsCollection = client.db("portfolio").collection("articls");

        // app.post("/blog", async (req, res) => {
        //     try {
        //         const item = req.body;
        //         const result = await articlsCollection.insertOne(item);
        //         res.status(200).json({ success: true, data: result });

        //     } catch (error) {
        //         console.log(error);
        //         res.status(500).json({ success: false, error: "An error occurred" })
        //     }
        // })

    } finally {

    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('server is running');
})

app.all("*",(req,res)=>{
    res.send("No route found");
})

app.listen(port, () => {
    console.log(`Listening to the port ${port}`);
})
