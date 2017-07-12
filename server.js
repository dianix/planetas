var express = require("express");
//var path = require("path");
var app = express();
app.get('/liga', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.listen(1234);
app.use('/static', express.static(path.join(__dirname, 'data')));
