const axios = require('axios');
const express = require('express');

const router = express.Router();

router.get('/dimensions', async (req, res) => {
  try {
    const result = await axios.get(
      'https://vehicles-staging.platform.autotrader.com.au/api/v1/dimensions',
      {
        params: {
          make: req.params.make,
          model: req.params.model,
          year: req.params.year,
        },
      },
    );
    res.send(result.data);
  } catch (e) {
    console.log('info', 'Error caught in /dimensions');
  }
});

router.get('/makes', async (req, res) => {
  try {
    const result = await axios.get(
      'https://vehicles-staging.platform.autotrader.com.au/api/v1/makes',
    );
    res.send(result.data);
  } catch (e) {
    console.log('info', 'Error caught in /makes!');
    console.log(e);
  }
});

router.get('/models', async (req, res) => {
  try {
    const result = await axios.get(
      'https://vehicles-staging.platform.autotrader.com.au/api/v1/models',
    );
    res.send(result.data);
  } catch (e) {
    console.log('info', 'Error caught in /models!');
    console.log(e);
  }
});

module.exports = router;
