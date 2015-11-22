var express = require('express');
var router = express.Router();

var TeamPage = require('./team');
var HomePage = require('./home');
var AboutPage = require('./about');
var EventsPage = require('./events');

router.get('/', HomePage);
router.get('/team', TeamPage);
router.get('/about', AboutPage);
router.get('/events', EventsPage);

module.exports = router;