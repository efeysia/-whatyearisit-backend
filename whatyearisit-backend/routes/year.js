
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
 const date = new Date().getFullYear().toString();
 res.json({ year: date });
});

module.exports = router;