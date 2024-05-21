const cron = require('node-cron');
const express = require('express');
const path = require('path');
const app = express();

const PORT = 8080;

let LEVEL = 15;
let COINS = 5;

const ID_USERS = new Map();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/level', (req, res) => {
    res.json(LEVEL);
});

app.get('/coins', (req, res) => {
    res.json(COINS);
});

app.get('/status_add_today', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const isPressToday = ID_USERS.has(ip);

    res.json(isPressToday);
});

app.get('/add_coin', (req, res) => {
    try {
        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

        if (!ID_USERS.has(ip)) {
            ID_USERS.set(ip, new Date());
            COINS += 5;
            res.json(true);
        } else {
            res.json(false);
        }
    } catch (error) {
        res.json(false);
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

cron.schedule('0 0 * * *', () => {
    ID_USERS.clear();
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
