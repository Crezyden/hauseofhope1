const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    path = require('path'),
    app = express(),
    port = process.env.PORT || 8080,
    server = app.listen(port);

// app.use(express.static(__dirname, 'public'));
app.use(express.static(path.join(__dirname, '../build')));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(cors());

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});