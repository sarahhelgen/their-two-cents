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
 * @apiSuccessExample {json} Success-Response 
 *   [{
      id: 76,
      name: 'Getting On',
      type: 'Television',
      notes: 'On HBO - about a geriatric wing in a hospital. Lots of strong female characters.',
      favorite: false,
      user_id: null,
      category_id: 1,
      rec_id: 76
    }]
 * @apiExample Example Usage:
 * http://localhost5000/api/media
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

/**
 * @api {delete} /media/:id Media List
 * @apiPermission user
 * @apiName DeleteMediaRecommendation
 * @apiGroup Media
 * @apiDescription This route is intended to delete a single item from the media page.
 *  @apiExample Example Usage:
 * http://localhost5000/api/media
 */

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    console.log('req.params is', req.params);
    const mediaId = req.params.id;
    const queryText = `DELETE FROM "recommendation" WHERE id = $1`;
    pool.query(queryText, [mediaId]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error with /media DELETE', error);
        res.sendStatus(500);
    })
})

/**
 * @api {put} /media/:id Media List
 * @apiPermission user
 * @apiName UpdateMediaRecommendation
 * @apiGroup Media
 * @apiDescription This route is intended to favorite a single item from the media page.
 *  @apiExample Example Usage:
 * http://localhost5000/api/media
 */

router.put('/:id', rejectUnauthenticated, (req, res) => {
    console.log('req.params is', req.params);
    const mediaId = req.params.id;
    let queryText = `UPDATE "recommendation" SET "favorite" = 'true' WHERE id = $1;`;
    pool.query(queryText, [mediaId]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error with media PUT', error);
        res.sendStatus(500);
    })
})

module.exports = router;