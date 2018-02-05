const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

var apiRoutes = express.Router();

app.use(express.static(path.resolve(__dirname, './book-webpack')))

app.get('*', function(req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, './book-webpack/index.html'), 'utf-8')
    res.send(html)
})
app.listen(9999);
