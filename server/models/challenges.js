const db = require('../config/db');

class Challenge {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        this.deadline = data.deadline;
        this.duration = data.duration;
        this.moneyPrize = data.moneyPrize;
        this.contactEmail = data.contactEmail;
        this.projectBrief = data.projectBrief;
        this.projectDescriptionAndTasks = data.projectDescriptionAndTasks;
    }

    static async findAll() {
        try {
            const challenges = await db.any('SELECT * FROM challenges');
            return challenges.map((challenge) => new Challenge(challenge));
        } catch (error) {
            console.error('Error fetching challenges:', error);
            throw error;
        }
    }

    static async findById(id) {
        try {
            const challenge = await db.oneOrNone('SELECT * FROM challenges WHERE id = $1', [id]);
            return challenge ? new Challenge(challenge) : null;
        } catch (error) {
            console.error('Error fetching challenge:', error);
            throw error;
        }
    }

    static async create(data) {
        try {
            const result = await db.one('INSERT INTO challenges (title, description, deadline) VALUES ($1, $2, $3) RETURNING *', [data.title, data.description, data.deadline]);
            return new Challenge(result);
        } catch (error) {
            console.error('Error creating challenge:', error);
            throw error;
        }
    }

    async update() {
        try {
            const result = await db.one('UPDATE challenges SET title = $1, description = $2, deadline = $3 WHERE id = $4 RETURNING *', [this.title, this.description, this.deadline, this.id]);
            return new Challenge(result);
        } catch (error) {
            console.error('Error updating challenge:', error);
            throw error;
        }
    }

    async delete() {
        try {
            await db.none('DELETE FROM challenges WHERE id = $1', [this.id]);
        } catch (error) {
            console.error('Error deleting challenge:', error);
            throw error;
        }
    }
}

module.exports = Challenge;