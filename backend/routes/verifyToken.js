const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const secretKey = '5Gf6R7Cz$T6aV3PwYbB9qZrGw*HnMxJ1sK3vL8s$VdKfNjQsThWmZp3s6v9yB';

router.post('/', async (req, res) => {
    const { token } = req.body;

    if (!token) return res.status(401).json({ message: 'Token not provided' });
  
    try 
    {
        const decoded = jwt.verify(token, secretKey);

        const currentTimestamp = Math.floor(Date.now() / 1000);
        if (decoded.exp && decoded.exp < currentTimestamp) return false;

        const user = await User.findByPk(decoded.id, {
            attributes: { exclude: ['password'] },
        });

        return res.status(200).json({ message: 'Token verified', id: user.id, email: user.email });
    } 
    catch (error) 
    {
        console.error(error);
        return res.status(401).json({ message: 'Invalid token' });
    }
});

module.exports = router;