
module.exports = (err, req, res, next) => {
    
    if (!err.errors) return next(err);
    const errorKeys = Object.keys(err.errors);
    let message = "";
    errorKeys.forEach((key) => (message += err.errors[key].message + ", "));

    message = message.substr(0, message.length - 2);

    res.status(400).json({
        message,
    });
}