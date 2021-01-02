const express = require('express')
const app = express()
const path = require("path")
const mongoose = require("mongoose")
const authRouter = require("./routes/authRouter")
const bodyParser = require("body-parser")

app.use(express.static(path.resolve(__dirname, "client/dist")))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/api", authRouter)

app.get('*', (req, res) => {
    res.status(200)
    res.sendFile(path.resolve(__dirname, "client/dist/index.html"));
})

const start = async () => {
    await mongoose.connect("mongodb://localhost:27017/shopdb",{
        useUnifiedTopology: true,
        useNewUrlParser: true
    },function (err) {
        if (err) throw err;
        console.log('Successfully connected');
    });
    app.listen(8000, () => console.log("сервер работает на http://localhost:8000"))
}

start()

