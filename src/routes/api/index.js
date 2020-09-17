const { wrap } = require("../../utils")
const router = require("express").Router();
const userRouter = require("./user");


/*
    route /api/
*/
router.post("/", wrap(async (req, res)=> {
    res.send(200);
}));


/*
    route /api/user/
*/
router.use("/user", userRouter);

module.exports = router;