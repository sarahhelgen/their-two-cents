const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "recommendation"
    JOIN "category" ON "category"."id" = "recommendation"."category_id"
    WHERE "category"."id" = '1';`
    pool.query(queryText)
        .then(result => {
            console.log('the result from media is', result);
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