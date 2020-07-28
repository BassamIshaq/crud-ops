var express = require('express')
var app = express()


app.get('/', (req, res)=>{
    res.send('Just for test')
})


app.listen(5000, console.log('Its running'))