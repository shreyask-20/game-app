// models/Player.js

const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        default: 'Start'
    },
    inventory: [String]
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
