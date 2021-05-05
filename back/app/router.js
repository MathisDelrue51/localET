const {Router} = require('express');

const router = Router();

const curiosetController = require('./controllers/curiosetController');

const userController = require('./controllers/userController');

router.get('/hello', (req,res) => {
    res.json('hello world');
});

router.get('/', curiosetController.allCuriosets);

module.exports = router;