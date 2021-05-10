const {Router} = require('express');

const router = Router();

const curiosetController = require('./controllers/curiosetController');
const userController = require('./controllers/userController');
const authController = require('./controllers/authController');
const authenticateToken = require('./middlewares/authenticateToken');

const curiosetSchema = require('./schemas/curioset');
const userSchema = require('./schemas/user');
const {validateBody} = require('./services/validator');

/**
 * Returns all curiosET from the database
 * @route GET /
 * @returns {Array<Curioset>} 200 - An array of curiosets
 */
router.get('/', curiosetController.allCuriosets);

/**
 * Create a new user in the db
 * @route POST /signup
 * @returns {User.model>} 200 - The User
 */
router.post('/signup', validateBody(userSchema), userController.newUser);

/**
 * Returns JSON with the pseudo, islogged true and the JsonWebToken
 * @route POST /login
 * @returns {Object}
 */
router.post('/login', authController.postLogin );

// Just to test if a user is connected or not
router.get('/connected', authenticateToken, authController.connected );

/**
 * Logout the user from the session
 * @route GET /logout
 */
router.get('/logout', authController.logout );

/**
 * Verify token and returns JSON with newly created curioset
 * @route POST /curioset
 * @returns {Curioset.model>} 200 - The curioset
 */
router.post('/curioset', authenticateToken, validateBody(curiosetSchema), curiosetController.newCurioset);

// We can create a cutomized 404 err page later
router.use((req, res) => res.status(404).json('endpoint not found')); 

module.exports = router;