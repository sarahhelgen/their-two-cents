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

//POST route to send new user recommendation to the db from add a recommendation page
router.post('/', (req, res) => {
  const newRecommendation = req.body;
  console.log('The new rec is', newRecommendation);
  const insertRecQuery = `INSERT INTO "recommendation" ("name", "type", "notes") VALUES ($1, $2, $3) RETURNING "id"`;
  pool.query(insertRecQuery, [newRecommendation.name, newRecommendation.type, newRecommendation.notes])
    .then(result => {
      console.log('New Recommendation id is', result.rows[0].id);
    }).catch(error => {
      console.log('error with first post to db', error);
      res.sendStatus(500);
    })
  const createdRecId = result.rows[0].id;
  const insertCategoryQuery = `INSERT INTO "category" ("category_name") VALUES ($1)`;
  pool.query(insertCategoryQuery, [createdRecId, Number(req.body.category)])
    .then(result => {
      res.sendStatus(201);
    }).catch(error => {
      console.log('Error with sending recommendation to db', error);
      res.sendStatus(500);
    })


});

module.exports = router;