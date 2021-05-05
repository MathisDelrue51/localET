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


}

module.exports = Curioset;