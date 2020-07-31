const express = require('express');
const router = express.Router();
const cors = require('cors');
const fetch = require("node-fetch");
const cumulativeURL = 'https://api.kawalcorona.com/indonesia';

router.get('/', cors(), function (req, res, next) {

  /**
   * Get cumulative data from resource
   * @param {string} URL 
   */
  const fetchCumulative = async function (URL) {
    await fetch(URL, {
        method: 'GET',
        mode: 'cors',
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then(data => data.json())
      .then(data => res.send(data))
      .catch(err => {
        res.send(err);
        res.statusCode;
      });
  };

  /* fetch data when access root url */
  fetchCumulative(cumulativeURL);
});

module.exports = router;