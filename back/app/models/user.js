const db = require('../database');

class User {
    constructor(data = {}) {
        for(const prop in data) {
            this[prop] = data[prop];
        }
    }
    
    static async findOne(id) {
        const {rows} = await db.query('SELECT * FROM user WHERE id = $1', [id]);
 
        if (rows[0]) {
            return new User(rows[0]);
        } else {
            throw new Error(`no user with id ${id}`);
        }
    }
    
}

module.exports = User;