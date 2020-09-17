module.exports = function (err, req, res, next) {
    err.stack = err.stack || "";
    const errorDetails = {
        message: err.message,
        status: err.status,
        stack: err.stack,
    };

    res.status(err.status || 500).json(errorDetails);
}