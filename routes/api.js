// ROUTES
const express = require("express");
const router = express.Router();
const getWeatherByCity = require("../controller/weatherController");
const rateLimiter = require("../middleware/rateLimiter");

//Get weather info by city
const getWeatherData = router.get("/:cityName", rateLimiter, getWeatherByCity);

module.exports = getWeatherData;
