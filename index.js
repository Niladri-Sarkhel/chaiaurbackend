require('dotenv').config();
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/next', function(req, res){
    res.send("<h1>hello there niladri</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})