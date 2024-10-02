const bodyParser = require('body-parser');
require('dotenv').config()
let express = require('express');
let app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.use(function(req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next();
})

app.get('/now', function(req, res, next) {
    req.time = new Date().toString()
    next();
  }, function(req, res) {
    res.send({time: req.time});
})

app.use('/public', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/:word/echo', (req, res) => {
    res.json({echo: req.params.word})
})

app.route('/name')
.get((req, res) => {
    res.json({name: `${req.query.first} ${req.query.last}`})
})
.post((req, res) => {
    res.json({name: `${req.body.first} ${req.body.last}`})
})

app.get('/json', (req, res) => {
    let message = "Hello json"

    if (process.env.MESSAGE_STYLE === 'uppercase') {
        message = message.toUpperCase()
    }

    res.json({message: message})
})
























 module.exports = app;
