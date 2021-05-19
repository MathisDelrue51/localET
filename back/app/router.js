const {Router} = require('express');

const router = Router();

const curiosetController = require('./controllers/curiosetController');
const userController = require('./controllers/userController');
const authController = require('./controllers/authController');
const authenticateToken = require('./middlewares/authenticateToken');

const curiosetSchema = require('./schemas/curioset');
const userSchema = require('./schemas/user');
const {validateBody} = require('./services/validator');
const Curioset = require('./models/curioset');

const { cache, flush } = require('./services/cache');

/**
 * Returns all curiosET from the database
 * @route GET /
 * @returns {Array<Curioset>} 200 - An array of curiosets
 */
router.get('/home', cache(600), curiosetController.allCuriosets);

router.get('*', (_,res) => {
    res.sendFile(path.join(__dirname,'../../front/dist/index.html'));
});

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
 * Access the profile page of the user with the corresponding id (if it exists)
 * @route GET /profile/:id - id must be a number (defined by the regex)
 */
router.get('/profile/:id(\\d+)', authenticateToken, cache(), userController.oneUserById);

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
router.post('/curioset', authenticateToken, validateBody(curiosetSchema), flush, curiosetController.newCurioset);

/**
 * Access the page of the curioset with the corresponding id (if it exists)
 * @route GET /curioset/:id - id must be a number (defined by the regex)
 */
router.get('/curioset/:id(\\d+)', cache(),  curiosetController.oneCuriosetById);

/**
 * Access the page of the curioset to update the different fields
 * @route PUT /curioset/:id - must be a positive number
 * @returns {Curioset} 204 - updated
 */
router.put('/curioset/:id(\\d+)', authenticateToken, validateBody(curiosetSchema), flush, curiosetController.updateCurioset);

/**
 * Access the page of the curioset to delete it
 * @route DELETE /curioset/:id - must be a positive number
 * @returns 204 - processed successfully and not returning any content
 */
router.delete('/curioset/:id(\\d+)', authenticateToken, flush, curiosetController.deleteCurioset);

// We can create a cutomized 404 err page later
router.use((req, res) => res.status(404).json('endpoint not found')); 

module.exports = router;