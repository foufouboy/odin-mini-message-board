const pool = require("./pool");

class MessagesStorage {
    constructor() {

    }

    async getAllMessages() {
        const { rows } = await pool.query("SELECT * FROM messages");
        return rows;
    }

    async addMessage(username, message) {
        await pool.query(
            `INSERT INTO messages (username, message)
             VALUES ($1, $2);
            `, [username, message]
        );
    }
}

module.exports = new MessagesStorage();