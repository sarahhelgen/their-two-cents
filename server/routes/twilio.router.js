const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'Greetings! You have recommendations waiting for you in Their Two Cents :) ',
        from: '+16124414900',
        to: '+16125016629'
    })
    .then(message => console.log(message))
    .catch(error => console.log(error));

/**
 * GET route template
 */
router.get('/', (req, res) => {
    // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    // POST route code here
});

module.exports = router;