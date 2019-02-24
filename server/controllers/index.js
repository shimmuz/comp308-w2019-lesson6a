let express = require('express');
let router = express.Router();

module.exports.diplayHomePage = (req, res, next) => {
    res.render('index', { title: 'Home' });
  }

  module.exports.displayAboutPage = (req, res, next) => {
    res.render('index', { title: 'About' });
  }

  module.exports.displayContactPage = (req, res, next) => {
    res.render('index', { title: 'Contact' });
  }

  module.exports.displayProductPage = (req, res, next) => {
    res.render('index', { title: 'Products' });
  }

  module.exports.displaySerPage = (req, res, next) => {
    res.render('index', { title: 'Services' });
  }

  

  module.exports.diplayFavThings = (req, res, next) => {
    res.render('index', { title: 'Favourites' });
  }

  module.exports.displayLoginPage = (req, res, next) => {
    //res.render('index', { title: 'Services' });
  }

  module.exports.processLoginPage = (req, res, next) => {
    //res.render('index', { title: 'Services' });
  }

  module.exports.displayregisterPage = (req, res, next) => {
    //res.render('index', { title: 'Services' });
  }

  module.exports.processRegisterPage = (req, res, next) => {
    //res.render('index', { title: 'Services' });
  }

  module.exports.performLogout = (req, res, next) => {
    //res.render('index', { title: 'Services' });
  }