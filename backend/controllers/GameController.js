// controllers/GameController.js

const Player = require('../models/Player');

module.exports = {
    async getPlayer(req, res) {
        try {
            const player =
                await Player.findById(req.params.id);
            res.json(player);
        } catch (err) {
            res.status(400).json(
                {
                    error: err.message
                });
        }
    },

    async createPlayer(req, res) {
        try {
            const player = await Player.create(req.body);
            res.json(player);
        } catch (err) {
            res.status(400).json(
                {
                    error: err.message
                });
        }
    },

    async updatePlayer(req, res) {
        try {
            const player =
                await Player.findByIdAndUpdate(
                    req.params.id,
                    req.body,
                    { new: true }
                );
            res.json(player);
        } catch (err) {
            res.status(400).json(
                {
                    error: err.message
                });
        }
    }
};
