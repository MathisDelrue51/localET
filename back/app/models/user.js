const db = require('../database');

/**
 * An entity representing a user
 * @typedef User
 * @property {number} id
 * @property {string} email
 * @property {string} pseudo
 * @property {string} password
 */

 /**
  * A model reprensenting a User
  * @class
  */
class User {
    /**
     * The User constructor
     * @param {Object} data - a litteral object with properties that will be copied into the instance
     */
    constructor(data = {}) {
        for(const prop in data) {
            this[prop] = data[prop];
        }
    }
    
    /**
     * Fetches a single user from the database with an id
     * @param {Number} id 
     * @returns {User|null} null if no user in the database has this id
     * @async
     * @static
     */
    static async findOne(id) {
        const {rows} = await db.query('SELECT * FROM "user" WHERE id = $1', [id]);
 
        if (rows[0]) {
            return new User(rows[0]);
        } else {
            throw new Error(`no user with id ${id}`);
        }
    }

    /**
     * Fetches a single user from the database with an email
     * @param {string} email 
     * @returns {User|null} null if no user in the database has this email
     * @async
     * @static
     */
    static async findByEmail(email) {
        const { rows } = await db.query('SELECT * FROM "user" WHERE email = $1;', [email]);

        if (rows[0]) { // If the email doesn't exist there is no row[0]
            return new User(rows[0]);
        } else {
            return null;
        }
    }

    /**
     * Fetches a single user from the database with a pseudo
     * @param {string} pseudo 
     * @returns {User|null} null if no user in the database has this pseudo
     * @async
     * @static
     */
    static async findByPseudo(pseudo) {
        const { rows } = await db.query('SELECT * FROM "user" WHERE pseudo = $1;', [pseudo]);

        if (rows[0]) { // If the email doesn't exist there is no row[0]
            return new User(rows[0]);
        } else {
            return null;
        }
    }    

    /**
     * Create a new user in the db or update an existing one
     * @async
     * @throws {Error} a potential SQL error
     */
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

                throw new Error(err.detail);
            }
        }
    }
}

module.exports = User;