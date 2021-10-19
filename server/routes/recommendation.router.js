const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')

//GET route to retrieve media recommendation count
router.get('/media', rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT count(*) FROM "recommendation"
  JOIN "category" ON "category"."id" = "recommendation"."category_id"
  WHERE "category"."id" = '1';`;
  pool.query(queryText)
    .then(result => {
      console.log('the result is', result);
      res.send(result.rows);
    }).catch(error => {
      console.log('Error getting recommendations from DB!', error);
      res.sendStatus(500);
    })
});

//get route to retrieve product recommendation count
router.get('/product', rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT count(*) FROM "recommendation"
  JOIN "category" ON "category"."id" = "recommendation"."category_id"
  WHERE "category"."id" = '3';`;
  pool.query(queryText)
    .then(result => {
      console.log('the result is', result);
      res.send(result.rows);
    }).catch(error => {
      console.log('Error getting recommendations from DB!', error);
      res.sendStatus(500);
    })
});

//get route to fetch business recommendation count
router.get('/business', rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT count(*) FROM "recommendation"
  JOIN "category" ON "category"."id" = "recommendation"."category_id"
  WHERE "category"."id" = '2';`;
  pool.query(queryText)
    .then(result => {
      console.log('the result is', result);
      res.send(result.rows);
    }).catch(error => {
      console.log('Error getting recommendations from DB!', error);
      res.sendStatus(500);
    })
});

//get route to fetch other recommendation count
router.get('/other',rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT count(*) FROM "recommendation"
  JOIN "category" ON "category"."id" = "recommendation"."category_id"
  WHERE "category"."id" = '4';`;
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
router.post('/', rejectUnauthenticated, (req, res) => {
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