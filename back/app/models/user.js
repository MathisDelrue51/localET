const db = require('../database');

class User {
    constructor(data = {}) {
        for(const prop in data) {
            this[prop] = data[prop];
        }
    }
    
    static async findOne(id) {
        const {rows} = await db.query('SELECT * FROM client WHERE id = $1', [id]);
 
        if (rows[0]) {
            return new User(rows[0]);
        } else {
            throw new Error(`no user with id ${id}`);
        }
    }
    
    static async findAll() {
        const { rows } = await db.quert('SELECT * FROM client;');
 
        return rows.map(row => new User(row));
    }
}

module.exports = User;