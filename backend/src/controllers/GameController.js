
const gameDAO = new (require('../models/Game'))();

module.exports = {

   async findAll(req, res) {

      let games = await gameDAO.selectAll();

      if (games.length == 0) {
         res.status(404).json({ Error: "The list is empty." });
      }
      
      res.json(games);
   },

   async findByPk(req, res) {

      const { id } = req.params;

      const game = await gameDAO.selectById(parseInt(id));

      if (game.length == 0) return res.status(404).json({ Error: "Game not found." })
      return res.json(game);
   },

   async findByName(req, res) {

      const { name } = req.params;

      const game = await gameDAO.selectByName(name);

      if (game.length == 0) return res.status(404).json({ Error: "Game not found." })
      return res.json(game);
   },

   async findByPlatform(req, res) {

      const { platform } = req.params;

      const game = await gameDAO.selectByPlatform(platform);

      if (game.length == 0) return res.status(404).json({ Error: "Game not found." })
      return res.json(game);
   }


}