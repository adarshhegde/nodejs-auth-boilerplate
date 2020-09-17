const apiRouter = require("./api");
const router = require("express").Router();

const slowDown = require('express-slow-down');
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 30 * 1000,
    max: 10
})

const speedLimiter = slowDown({
    windowMs: 30 * 1000,
    delayAfter: 1,
    delayMs: 500,
});

/*
    GET => hostname/
*/
router.get("/", (req, res) => {
    res.send(200)
});


/*
    hostname/api
    >> Mounting subroute "api"
*/
router.use("/api", limiter, speedLimiter, apiRouter);

module.exports = router;