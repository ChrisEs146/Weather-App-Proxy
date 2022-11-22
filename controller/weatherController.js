const fetch = require("node-fetch");

/**
 * Gets weather information from a city based on the city's name.
 */
const getWeatherByCity = async (req, res, next) => {
  const { cityName } = req.params;
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.API_KEY}`
    );
    const data = await response.json();
    if (data.cod === "404") {
      return res.status(404).json({ message: "City was not found" });
    }
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = getWeatherByCity;
