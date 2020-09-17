const express = require("express")
const cors = require("cors")

const middlewares = require("./middlewares")
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/",  require("./routes/")); // mount root route

app.use([middlewares.mongoseErrors, middlewares.RuntimeErrorHandler,  middlewares.Route404Handler]);

module.exports = app;