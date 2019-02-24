let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');
/* GET home page. */
router.get('/', indexController.diplayHomePage);

router.get('/about', indexController.displayAboutPage);

router.get('/contact', indexController.displayContactPage);

router.get('/products', indexController.displayProductPage);

router.get('/services', indexController.displayAboutPage);

router.get('/favThings', indexController.diplayFavThings);

/* Get - displays the login page */
router.get('/login',indexController.displayLoginPage);
/* Post - process the login page*/
router.post('/login',indexController.processLoginPage);
/* Get - displays the user registartion page*/
router.get('/register',indexController.displayregisterPage);
/* Pos --process the user registartion page*/
router.post('/register',indexController.processRegisterPage);
/* Get - perfrom usre logout */
router.get('/logout',indexController.performLogout);


module.exports = router;