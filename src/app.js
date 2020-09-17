const express = require("express")
const cors = require("cors")

const middlewares = require("./middlewares")
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// mounting root router
app.use("/",  require("./routes/")); 

app.use([
    middlewares.mongooseErrorHandler,
    middlewares.UncaughtExceptionHandler,
    middlewares.missingRouteHandler
]);

module.exports = app;