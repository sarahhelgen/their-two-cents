const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')

router.get('/', rejectUnauthenticated,  (req, res) => {
    const queryText = `SELECT "recommendation".*, "recommendation"."id" as "rec_id" FROM "recommendation"
    JOIN "category" ON "category"."id" = "recommendation"."category_id"
    WHERE "favorite" = 'true';`
    pool.query(queryText)
        .then(result => {
            console.log('the result from favorites  is', result);
            res.send(result.rows);
        }).catch(error => {
            console.log('error with favorites GET', error);
        })
});

router.delete('/:id', rejectUnauthenticated, (req,res) => {
    console.log('req.params is', req.params );
    const favoriteId = req.params.id;
    const queryText = `DELETE FROM "recommendation" WHERE id = $1`;
    pool.query(queryText, [favoriteId] ).then((result) =>{
        res.sendStatus(200);
    }).catch((error) =>{
        console.log( 'error with /favorite DELETE', error );
        res.sendStatus(500);
    })
})


module.exports = router;