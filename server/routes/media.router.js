const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')


/**
 * @api {get} /media Media List
 * @apiPermission user
 * @apiName GetMediaRecommendations
 * @apiGroup Media
 * @apiDescription This route is intended to get all Media recommendations for the media page
 * @apiSuccessExample {json}
 */

router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = `SELECT "recommendation".*, "recommendation"."id" as "rec_id" FROM "recommendation"
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


router.delete('/:id', rejectUnauthenticated, (req,res) => {
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

router.put('/:id',rejectUnauthenticated, (req,res) => {
    console.log('req.params is', req.params );
    const mediaId = req.params.id;
    let queryText = `UPDATE "recommendation" SET "favorite" = 'true' WHERE id = $1;`;
    pool.query(queryText, [mediaId]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log( 'error with media PUT', error );
        res.sendStatus(500);
    })
})

module.exports = router;