const db = require('../database');

class Curioset {
   constructor(data = {}) {
       for(const prop in data) {
           this[prop] = data[prop];
       }
   }
   
   static async findOne(id) {
       const {rows} = await db.query('SELECT * FROM DATABASE WHERE id = $1', [id]);

       if (rows[0]) {
           return new Curioset(rows[0]);
       } else {
           throw new Error(`no curioset with id ${id}`);
       }
   }

   static async findAll() {
       const { rows } = await db.quert('SELECT * FROM DATABASE;');

       return rows.map(row => new Curioset(row));
   }


}

module.exports = Curioset;