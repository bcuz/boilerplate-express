require('dotenv').config()
let express = require('express');
let app = express();

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

app.get('/json', (req, res) => {
    let message = "Hello json"

    if (process.env.MESSAGE_STYLE === 'uppercase') {
        message = message.toUpperCase()
    }

    res.json({message: message})
})
























 module.exports = app;
