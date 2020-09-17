const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const helmet = require("helmet")

const middlewares = require("./middlewares")

const app = express()

app.set('trust proxy', 1);
app.use(morgan('dev'));
app.use(cors())
app.use(helmet());
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