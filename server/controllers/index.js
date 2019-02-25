let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let passport = require("passport");

//define the user Model
let userModel = require("../models/user");
let user = userModel.User; //alias

module.exports.diplayHomePage = (req, res, next) => {
  res.render("index", {
    title: "Home",
    displayName: req.user ? req.user.displayName : ""
  });
};

module.exports.displayAboutPage = (req, res, next) => {
  res.render("index", {
    title: "About",
    displayName: req.user ? req.user.displayName : ""
  });
};

module.exports.displayContactPage = (req, res, next) => {
  res.render("index", {
    title: "Contact",
    displayName: req.user ? req.user.displayName : ""
  });
};

module.exports.displayProductPage = (req, res, next) => {
  res.render("index", {
    title: "Products",
    displayName: req.user ? req.user.displayName : ""
  });
};

module.exports.displaySerPage = (req, res, next) => {
  res.render("index", {
    title: "Services",
    displayName: req.user ? req.user.displayName : ""
  });
};

module.exports.diplayFavThings = (req, res, next) => {
  res.render("index", {
    title: "Favourites",
    displayName: req.user ? req.user.displayName : ""
  });
};

module.exports.displayLoginPage = (req, res, next) => {
  // check if user is already logged in
  if (!req.user) {
    res.render("auth/login", {
      title: "Login",
      messages: req.flash("loginMessage"),
      displayName: req.user ? req.user.displayName : ""
    });
  } else {
    return res.redirect("/");
  }
};

module.exports.processLoginPage = (req,res,next)=>{
 passport.authenticate('local', 
   (err,user,info) => {
     //server error?
     if (err){
       return next(err);
     }
     // is theer a user login error?
     if(!user){
       req.flash("loginMessage","Authentication Error");
       return res.redirect('/login');
     }
     req.logIn(user,(err) => {
       //server error?
       if(err){
         return next(err);
       }
       return res.redirect('/contact-list');
      
       });
     })(req,res,next);
   }


module.exports.displayregisterPage = (req, res, next) => {
  if (!req.user) {
    res.render("auth/register", {
      title: "Register",
      messages: req.flash("registerMessage"),
      displayName: req.user ? req.user.displayName : ""
    });
  } else {
    return res.redirect("/");
  }
};

module.exports.processRegisterPage = (req, res, next) => {
  let newUser = new user({
    username: req.body.username,
    //password: req.body.password
    email: req.body.email,
    displayName: req.body.displayName
  });
  user.register(newUser, req.body.password, (err) => {
    if (err) {
      console.log("Error: Inserting New USer");
      if (err.name == "UserExistsError") {
        req.flash(
          "registerMessage",
          "Registration Error: User Already Exists!"
        );
        console.log("Error: User Already Exists !");
      }
      return res.render("auth/register", {
        title: "Register",
        messages: req.flash("registerMessage"),
        displayName: req.user ? req.user.displayName : ""
      });
    } else{
      //if no error exists, then registartion is successful

      //redirect the user
      return passport.authenticate("local")(req, res, () => {
        res.redirect("/contact-list");
      });
    }

    
    
  });
};

module.exports.performLogout = (req, res, next) => {
  req.logout();
  res.redirect("/");
};
