const router = require("express").Router();
const userController = require("../../controllers/user");
const authorize = require("../../middlewares/authorize");


/*
    POST => hostname/api/user/login
*/
router.post("/login", userController.login);


/*
    POST => hostname/api/user/register
*/
router.post("/register", userController.register);


/*  
    POST => hostname/api/user/verify
    >> Requires Authentication Token
*/
router.post("/verify", authorize, userController.verify);


module.exports = router;
