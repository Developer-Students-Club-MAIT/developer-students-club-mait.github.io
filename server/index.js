const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000

app.use(express.static(path.join('/../client/src')))

app.get('/', (req, res) => {
    res.sendFile(path.resolve('client', 'src', 'index.html'))
});

app.listen(PORT, console.log(`Server is running on PORT: ${PORT}`))