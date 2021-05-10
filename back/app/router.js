const {Router} = require('express');

const router = Router();

const curiosetController = require('./controllers/curiosetController');
const userController = require('./controllers/userController');
const authController = require('./controllers/authController');
const authenticateToken = require('./middlewares/authenticateToken');

const curiosetSchema = require('./schemas/curioset');
const userSchema = require('./schemas/user');
const {validateBody} = require('./services/validator');

router.get('/hello', (req,res) => {
    res.json('hello world');
});

router.get('/', curiosetController.allCuriosets);

router.get('/login', authController.getLogin ); //Not necessary, since we don't send data on this page, the front will call it
router.post('/login', authController.postLogin );
router.get('/connected', authenticateToken, authController.connected ); // Just to test if a user is connected or not
router.get('/logout', authController.logout );

router.get('/curioset', authenticateToken, curiosetController.showCuriosetForm );
router.post('/curioset', authenticateToken, validateBody(curiosetSchema), curiosetController.newCurioset);
router.post('/signup', validateBody(userSchema), userController.newUser);

// We can create a cutomized 404 err page later
router.use((req, res) => res.status(404).json('endpoint not found')); 

module.exports = router;