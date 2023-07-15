const express = require("express");

const { encodePayload, decodeToken } = require("../controllers/tokenControllers");

const router = express.Router();

router.get("/encode", encodePayload);
router.get('/decode', decodeToken)

module.exports = router;