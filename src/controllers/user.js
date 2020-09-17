const { wrap: _ } = require("../utils")
const jwt = require("jwt-then")
const mongoose = require("mongoose")
const User = mongoose.model("user")


module.exports.login = _(async (req, res, next) => {


    const { username, password } = req.body;
    if (!username?.length > 0) return next({ message: "Username cannot be empty!", status: 400 })
    if (!password?.length > 0) return next({ message: "Password cannot be empty!", status: 400 })
    let _user = await User.login(username, password);
    if (_user) {
        const token =
            await jwt.sign({
                username: _user.username, _id: _user._id
            },
                process.env.SECRET,
                { expiresIn: "1h" }
            );
        return res.status(200).json({ message: "Successfully logged in", token, code: 200 });
    }

    else return next({ message: "Invalid username or password!", status: 400 });

})


module.exports.register = _(async (req, res, next) => {

    const { username, password, email } = req.body;

    if (await User.findOne({
        $or: [
            { username },
            { email }
        ]
    })) return next({ message: "User already exists!", status: 400 });

    const newUSer = new User({ username, password, email });
    await newUSer.save();

    res.json({ status: 200, message: "User created successfully" });

})


module.exports.verify = (req, res) => res.status(200).json({ message: "verified", status: 200 })