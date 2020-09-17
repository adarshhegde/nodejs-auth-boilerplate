require("dotenv").config();
const mongoose = require("mongoose");
require("./src/models");
const app = require('./src/app');
const PORT = process.env.PORT || 5000;

(async function () {
        mongoose.set('useCreateIndex', true)
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to mongodb.");
        app.listen(PORT, () => {
                if (process.env.NODE_ENV != 'production')
                        console.log("http://localhost:" + (PORT))
        });
})().catch((err) => {
        // can do additional logging here
        if (process.env.NODE_ENV != 'production') throw err;
        process.exit(1)
})