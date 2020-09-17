exports.RuntimeErrorHandler = function (err, req, res, next) {
    err.stack = err.stack || "";
    const errorDetails = {
        message: err.message,
        status: err.status,
        stack: err.stack,
    };

    res.status(err.status || 500).json(errorDetails);
}


const styles = `font-family:consolas; text-align:center; display:flex; width: 100vw; height: 100vh; justify-content:center; align-items: center; font-size:20pt; margin: 0;`;

exports.Route404Handler = (_, res) => {
    return res.status(404).send(`<body style="${styles}">You seem to be lost.🥺👉👈</body>`);
}


exports.mongoseErrors = (err, req, res, next) => {
    
    if (!err.errors) return next(err);
    const errorKeys = Object.keys(err.errors);
    let message = "";
    errorKeys.forEach((key) => (message += err.errors[key].message + ", "));

    message = message.substr(0, message.length - 2);

    res.status(400).json({
        message,
    });
}