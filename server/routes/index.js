const axios = require('axios');
const express = require('express');

const router = express.Router();

router.get('/dimensions', async (req, res) => {
  try {
    const result = await axios.get(
      'https://vehicles-staging.platform.autotrader.com.au/api/v1/dimensions',
      {
        params: {
          make: req.query.make,
          make_seo: req.query.make_seo,
          model: req.query.model,
          model_seo: req.query.model_seo,
          year: req.query.year,
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
      'https://vehicles-staging.platform.autotrader.com.au/api/v1/models?',
      {
        params: { make_id: req.query.make_id || '' },
      },
    );
    res.send(result.data);
  } catch (e) {
    console.log('info', 'Error caught in /models!');
    console.log(e);
  }
});

module.exports = router;
