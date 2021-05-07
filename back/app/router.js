const {Router} = require('express');

const router = Router();

const curiosetController = require('./controllers/curiosetController');
const userController = require('./controllers/userController');
const authController = require('./controllers/authController');
const authenticateToken = require('./middlewares/authenticateToken');

const userSchema = require('./schemas/user');
const {validateBody} = require('./services/validator');

router.get('/hello', (req,res) => {
    res.json('hello world');
});

router.get('/', curiosetController.allCuriosets);

router.post('/login', authController.postLogin );

router.get('/connected', authenticateToken , authController.connected )

router.get('/logout', authController.logout );

router.post('/signup', validateBody(userSchema), userController.newUser);


router.use((req, res) => res.status(404).json('endpoint not found')); // We can create a cutomized 404 err page later

module.exports = router;