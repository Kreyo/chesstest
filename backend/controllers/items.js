const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');

const userDAO = require('../db/daos/items');

router.get('/', asyncHandler(async (request, response) => {
    const items = await userDAO.getAllItems();

    response.status(200).json({ "items": items });
}));

module.exports = router;
