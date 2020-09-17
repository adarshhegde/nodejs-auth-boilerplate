const mongoose = require("mongoose")
const bcrypt = require("bcrypt");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username cannot be empty!"],
        unique: true,
        lowercase: true   
    },
    
    email: {
        type: String,
        required: [true, "Email cannot be empty!"],
        unique: true,
        lowercase: true,
        validate:[isEmail, "Please enter a valid email!"]   
    },

    password: {
        type: String,
        required: [true, "Password cannot be empty!"],
        minlength: [6, "Enter a password with length of minimum 6 characters!"],
      },
}, {
    timestamps: true
})

userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });
  
  userSchema.statics.login = async function (username, password) {
    const user = await this.findOne({ username });
    if(!user) return false;
    return  await bcrypt.compare(password, user.password)
            ? {_id: user._id, username: user.username, email: user.email} 
            : false;
  };
  
  const User = mongoose.model("user", userSchema);
  module.exports = User;