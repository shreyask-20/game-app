// routes.js

const express = require('express');
const router = express.Router();
const GameController = require('./controllers/GameController');

// Routes
router.get('/player/:id', GameController.getPlayer);
router.post('/player', GameController.createPlayer);
router.put('/player/:id', GameController.updatePlayer);

module.exports = router;
