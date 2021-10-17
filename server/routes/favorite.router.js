const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "recommendation"
    WHERE "favorite" = 'true';`
    pool.query(queryText)
        .then(result => {
            console.log('the result from favorites  is', result);
            res.send(result.rows);
        }).catch(error => {
            console.log('error with favorites GET', error);
        })
});


module.exports = router;