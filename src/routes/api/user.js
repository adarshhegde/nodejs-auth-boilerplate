const router = require("express").Router();
const userController = require("../../controllers/user");
const authorize = require("../../middlewares/authorize");


/*
    route /api/user/login
*/
router.post("/login", userController.login);


/*
    route /api/user/register
*/
router.post("/register", userController.register);

/*  
    !NEEDS AUTH
    route /api/user/verify
*/
router.post("/verify", authorize, userController.verify);

module.exports = router;
