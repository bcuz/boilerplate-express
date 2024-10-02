let express = require('express');
let app = express();

console.log("Hello World")

// didnt expect to have much trouble lol
// app.use('/public', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})



























 module.exports = app;
