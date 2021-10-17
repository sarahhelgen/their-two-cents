const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const queryText = `SELECT "recommendation".*, "recommendation"."id" as "rec_id" FROM "recommendation"
    JOIN "category" ON "category"."id" = "recommendation"."category_id"
    WHERE "favorite" = 'true';`
    pool.query(queryText)
        .then(result => {
            console.log('the result from product is', result);
            res.send(result.rows);
        }).catch(error => {
            console.log('error with product GET', error);
        })
});


module.exports = router;