// Imports
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const weatherData = require("./routes/api");
const errorHandler = require("./middleware/errorHandler");

app.use(cors());
app.use(express.json({ extended: true }));

// Using routes
app.use("/weather", weatherData);
// Port
const PORT = process.env.PORT;
// Adding errorHandler
app.use(errorHandler);
app.listen(PORT, console.log(`Server running on port ${PORT}`));
