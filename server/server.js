const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const recommendationRouter = require('./routes/recommendation.router');
const mediaRouter = require('./routes/media.router');
const businessRouter = require('./routes/business.router');
const productRouter = require('./routes/product.router');
const otherRouter = require('./routes/other.router')
const favoriteRouter = require('./routes/favorite.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/recommendation', recommendationRouter );
app.use('/api/media', mediaRouter );
app.use('/api/business', businessRouter );
app.use('/api/product', productRouter );
app.use('/api/other', otherRouter );


// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
