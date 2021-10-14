const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "recommendation"
    JOIN "category" ON "category"."id" = "recommendation"."category_id"
    WHERE "category"."id" = '2';`
    pool.query(queryText)
        .then(result => {
            console.log('the business results are', result);
            res.send(result.rows);
        }).catch(error => {
            console.log('error with media GET', error);
        })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    // POST route code here
});

module.exports = router;