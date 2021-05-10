const db = require('../database');

class Curioset {
   constructor(data = {}) {
       for(const prop in data) {
           this[prop] = data[prop];
       }
   }

   //Find curioset by id

   static async findOne(id) {
       const {rows} = await db.query('SELECT * FROM curioset WHERE id = $1', [id]);

       if (rows[0]) {
           return new Curioset(rows[0]);
       } else {
           throw new Error(`no curioset with id ${id}`);
       }
   }

   //Find all curiosets
   static async findAll() {
       const { rows } = await db.query('SELECT * FROM curioset;');

       return rows.map(row => new Curioset(row));
   }

   async save() {
    // if id, UPDATE, else, INSERT
    if (this.id) {
        // TODO : UPDATE 
    } else {
        try {
            const { rows } = await db.query('INSERT INTO curioset (title, description, address, latitude, longitude, website, agenda, price, user_id, category_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id;', [
                this.title,
                this.description,
                this.address,
                this.latitude,
                this.longitude,
                this.website,
                this.agenda,
                this.price,
                this.user_id,
                this.category_id
            ]);

            this.id = rows[0].id;
        } catch (err) {            
            throw new Error(err.detail);
        }

    }
}


}

module.exports = Curioset;