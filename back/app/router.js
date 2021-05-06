const {Router} = require('express');

const router = Router();

const curiosetController = require('./controllers/curiosetController');
const userController = require('./controllers/userController');
const authController = require('./controllers/authController');

router.get('/hello', (req,res) => {
    res.json('hello world');
});

router.get('/', curiosetController.allCuriosets);

router.get('/login', authController.getLogin );
router.post('/login', authController.postLogin );

router.get('/logout', authController.logout );

module.exports = router;