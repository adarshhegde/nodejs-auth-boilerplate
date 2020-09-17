const { wrap } = require("../../utils")
const router = require("express").Router();
const userRouter = require("./user");


/*
   POST => hostname/api/
*/
router.post("/", wrap(async (req, res)=> {
    res.send(200);
}));


/* 
    hostname/api/user/
    >> mounting subroute "user"
*/
router.use("/user", userRouter);

module.exports = router;