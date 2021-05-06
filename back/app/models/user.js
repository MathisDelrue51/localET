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

    static async findByEmail(email) {
        const { rows } = await db.query('SELECT * FROM "user" WHERE email = $1;', [email]);

        if (rows[0]) { // If the email doesn't exist there is no row[0]
            return new User(rows[0]);
        } else {
            throw new Error(`no user with email ${email}`);
        }
    }    
}

module.exports = User;