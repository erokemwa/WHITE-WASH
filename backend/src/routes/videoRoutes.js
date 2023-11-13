/* eslint-disable import/no-unresolved */
// backend/src/routes/videoRoutes.js
const express = require('express');

const router = express.Router();
const videoController = require('../controllers/videoController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', videoController.getAllVideos);
router.post('/', authMiddleware.authenticateToken, videoController.addVideo);

module.exports = router;
