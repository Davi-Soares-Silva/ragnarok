const baseQuery = require('./baseQuery');

const table = 'tbl_games';

class Game {
   
   selectAll(){
      return baseQuery(`SELECT id, name, price, image_link FROM ${table}`);
   }

   selectById(id){
      return baseQuery(`SELECT * FROM ${table} WHERE id = ?`, id);
   }

   insert(game){
      return baseQuery(`INSERT INTO ${table} SET ?`, game);
   }

   update(game){
      return baseQuery(`UPDATE FROM ${table} SET ? WHERE id = ?`, [game, game.id]);
   }

   delete(id){
      return baseQuery(`DELETE FROM ${table} WHERE id = ?`, id);
   }

   selectByName(name){
      name = `%${name}%`;
      return baseQuery(`SELECT  id, name, price, image_link FROM ${table} WHERE name LIKE ?`, name)
   }

   selectByPlatform(platform){
      platform = `%${platform}%`;
      return baseQuery(`SELECT  id, name, price, image_link, platforms FROM ${table} WHERE platforms LIKE ?`, platform)
   }
}

module.exports = Game;