const dataBase = require('./dataBase.js');
const usersBase = require('./usersBase.js');

exports.getLevel = async (req, res) => {
    try {
        const LEVEL = await dataBase.getDataAdminTable('level');
        res.json(LEVEL);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getCoins = async (req, res) => {
    try {
        const COINS = await dataBase.getDataAdminTable('coins');
        res.json(COINS);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getStatusAddToday = (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const isPressToday = usersBase.has(ip);
    res.json(isPressToday);
};

exports.addCoin = async (req, res) => {
    try {
        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

        if (!usersBase.has(ip)) {
            usersBase.set(ip, new Date());

            let COINS = await dataBase.getDataAdminTable('coins');

            COINS += 1500;

            const LEVEL = dataBase.levelUp(COINS);

            await dataBase.updateDataAdminTable('coins', COINS);
            await dataBase.updateDataAdminTable('level', LEVEL);

            if ([20, 40, 60, 80].includes(LEVEL)) {
                await dataBase.achievedLevelAchieve(LEVEL);
            }

            res.json(true);
        } else {
            res.json(false);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.updateUsersStatistic = async (req, res) => {
    try {
        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        await dataBase.updateUserTable(ip);
        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error updating user statistics in the database:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getAchievements = async (req, res) => {
    try {
        const achievements = await dataBase.getAchievements();
        res.json(achievements);
    } catch (error) {
        console.error('Error getting achievements from database:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getServerTime = (req, res) => {
    try {
        const serverTime = getCurrentServerTime();
        res.json({ serverTime });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};