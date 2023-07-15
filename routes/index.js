const router = require('express').Router();

router.use('/token', require('./tokenRoutes'));

module.exports = router;
