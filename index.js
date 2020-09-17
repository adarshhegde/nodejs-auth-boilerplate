require("dotenv").config();
const mongoose = require("mongoose");
require("./src/models");
const app = require('./src/app');

(async function () {
        mongoose.set('useCreateIndex', true)
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to mongodb.");
        app.listen(process.env.PORT || 5000, () => console.log("http://localhost:" + (process.env.PORT || 5000)));
})().catch((err) => {
        // can do additional logging
        throw err;
        process.exit(1)
})