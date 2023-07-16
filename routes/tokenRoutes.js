const express = require("express");

const { encodePayload, decodeToken } = require("../controllers/tokenControllers");

const router = express.Router();

router.post("/encode", encodePayload);
router.post('/decode', decodeToken)

module.exports = router;