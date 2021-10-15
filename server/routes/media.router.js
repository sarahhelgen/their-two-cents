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


router.delete('/:id', (req,res) => {
    console.log('req.params is', req.params );
    const mediaId = req.params.id;
    const queryText = `DELETE FROM "recommendation" WHERE id = $1`;
    pool.query(queryText, [mediaId] ).then((result) =>{
        res.sendStatus(200);
    }).catch((error) =>{
        console.log( 'error with /media DELETE', error );
        res.sendStatus(500);
    })
})

module.exports = router;