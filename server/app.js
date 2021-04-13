const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    path = require('path'),
    app = express(),
    port = process.env.PORT || 8080,
    server = app.listen(port);

app.use(express.static(path.join(__dirname, '../build')));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(cors());

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

function KeepAlive() {
    setInterval(() => {
        let options = {
            host: 'hoh2.herokuapp.com/',
            port: 80,
            path: '/'
        };
        http.get(options, res => {
            res.on('data', () => {
                return true;
            });
        }).on('error', err => {
            console.log('HEROKU ERROR: ', err.message);
        });
    }, 20 * 60 * 1000);
}
KeepAlive();