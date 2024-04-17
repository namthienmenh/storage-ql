var express = require('express');
var router = express.Router();
const axios = require('axios');
const logger = require("../utils/logger");


/* GET search. */
router.get('/search', async function(req, res, next) {
  try {
    const q = req.query.q || '';
    const apiURL = `${process.env.API_URL}/search.json?key=${process.env.API_TOKEN}&q=${q}`;
    logger.info(apiURL);
    const response = await axios.get(apiURL);
    res.json(response.data);
  } catch (error) {
    next(error);
  }
});

/* GET search. */
router.get('/data', async function(req, res, next) {
  try {
    const q = req.query.q || '';
    const apiURL = `${process.env.API_URL}/forecast.json?key=${process.env.API_TOKEN}&days=1&aqi=yes&alerts=yes&q=${q}`;
    logger.info(apiURL);
    const response = await axios.get(apiURL);
    res.json(response.data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
