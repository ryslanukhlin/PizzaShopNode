const express = require('express')
const app = express()

app.use(express.static("client/dist"))

app.get('/', (req, res) => {
    res.sendFile('./dist/index.html');
})

app.listen(8000, () => console.log("сервер работает на http://localhost:8000"))
