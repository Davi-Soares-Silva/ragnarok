const router = require('express').Router();

const gameController = require('./controllers/GameController');

router.get('/games', gameController.findAll);
router.get('/games/:id', gameController.findByPk);
router.get('/games/name/:name', gameController.findByName);
router.get('/games/platform/:platform', gameController.findByPlatform);

module.exports = router;