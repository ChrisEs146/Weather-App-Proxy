// Imports
const limiter = require("express-rate-limit");

// Setting rate limiter middleware
const weatherLimiter = limiter({
  windowMs: 60 * 1000,
  max: 6,
  message: { message: "Too many request, please try againg in 1 minute" },
  handler: (req, res, next, options) => {
    res.status(options.statusCode).send(options.message);
  },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = weatherLimiter;
