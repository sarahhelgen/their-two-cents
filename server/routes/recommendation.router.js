const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET route to retrieve all recommendation data from db and display on home page
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "recommendation" ORDER BY "name"`;
  pool.query(queryText)
    .then(result => {
      console.log('the result is', result);
      res.send(result.rows);
    }).catch(error => {
      console.log('Error getting recommendations from DB!', error);
      res.sendStatus(500);
    })
});

//POST route to send new user recommendation and category to the db from add a recommendation page
router.post('/', (req, res) => {
  const newRecommendation = req.body;
  console.log('The new rec is', newRecommendation);
  const insertRecQuery = `INSERT INTO "recommendation" ("name", "type", "notes", "category_id") VALUES ($1, $2, $3, $4 ) RETURNING "id";`;
  pool.query(insertRecQuery, [newRecommendation.name, newRecommendation.type, newRecommendation.notes, newRecommendation.category ])
    .then(result => {
      res.sendStatus(201);
    }).catch(error => {
      console.log('error with post to db', error);
      res.sendStatus(500);
    })

});

module.exports = router;