const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')



router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = `SELECT "recommendation".*, "recommendation"."id" as "rec_id" FROM "recommendation"
    JOIN "category" ON "category"."id" = "recommendation"."category_id"
    WHERE "category"."id" = '3';`
    pool.query(queryText)
        .then(result => {
            console.log('the result from product is', result);
            res.send(result.rows);
        }).catch(error => {
            console.log('error with product GET', error);
        })
});

router.delete('/:id', rejectUnauthenticated, (req,res) => {
    console.log('req.params is', req.params );
    const productId = req.params.id;
    const queryText = `DELETE FROM "recommendation" WHERE id = $1`;
    pool.query(queryText, [productId] ).then((result) =>{
        res.sendStatus(200);
    }).catch((error) =>{
        console.log( 'error with /product DELETE', error );
        res.sendStatus(500);
    })
})

router.put('/:id', rejectUnauthenticated, (req,res) => {
    console.log('req.params is', req.params );
    const productId = req.params.id;
    let queryText = `UPDATE "recommendation" SET "favorite" = 'true' WHERE id = $1;`;
    pool.query(queryText, [productId]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log( 'error with product PUT', error );
        res.sendStatus(500);
    })
})

module.exports = router;