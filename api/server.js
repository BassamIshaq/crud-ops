var express = require('express')
var app = express()

var cors = require('cors')
var bodyParser = require('body-parser')

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/GetData', (req, res)=>{
    console.log('/GetData route called')
    
    res.send({
        people: [
            {
                name: 'Mohsin',
                age: 20
            },
            {
                name: 'Sheheryar',
                age: 24
            }
        ]
    })
})


app.listen(5000, console.log('Its running'))