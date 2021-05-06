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
    
    async save() {

        if (this.id) {
            //Here We can update a user data
        } else { // Here we create a new user in databse
            try {
                const { rows } = await db.query('INSERT INTO "user" (email, password, pseudo) VALUES ($1, $2, $3) RETURNING id;', [

                    this.email,
                    this.password,
                    this.pseudo
                ]);

                this.id = rows[0].id;

            } catch (err) {

                throw new Eroor(err.detail);
            }
        }
    }
}

module.exports = User;