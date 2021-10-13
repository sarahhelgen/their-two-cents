const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET route to retrieve all recommendation data from db and display on home page
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "recommendation" ORDER BY "name`;
  pool.query(queryText)
    .then(result => {
      console.log('the result is', result );
      res.send(result.rows);
    }).catch(error => {
      console.log('Error getting recommendations from DB!', error);
      res.sendStatus(500);
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;