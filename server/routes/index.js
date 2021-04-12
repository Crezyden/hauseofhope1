const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(cors());

app.get('/', (req, res) => {
    res.send('Работает все');
});