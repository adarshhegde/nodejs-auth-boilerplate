const router = require("express").Router();
const userRouter = require("./user");


/*
   POST => hostname/api/
*/
router.post("/", (req, res) => {
    res.send(200);
});


/* 
    hostname/api/user/
    >> mounting subroute "user"
*/
router.use("/user", userRouter);

module.exports = router;