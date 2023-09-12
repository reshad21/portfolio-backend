const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
const articlesRoutes = require('./routes/v1/articles.route');
const viewCount = require('./middleware/viewCount');
const errorHandler = require('./middleware/errorHandler');
const { connectToServer } = require('./utils/dbconnect');


// middleware
app.use(cors());
app.use(express.json());

app.use(viewCount);

connectToServer((err) => {
    if (!err) {
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
    } else {
        console.log(err);
    }
});

app.use("/api/v1/blog", articlesRoutes)




app.get('/', (req, res) => {
    res.send('server is running');
})

app.all("*", (req, res) => {
    res.send("No route found");
})

app.use(errorHandler);



