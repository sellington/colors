const express = require('express');
const ip = require('ip');
const fs = require('fs');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    fs.appendFile('ips.txt', `${clientIp}\n`, function (err) {
        if (err) throw err;
    });
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(443, () => console.log('Server is running on port 3000'));
