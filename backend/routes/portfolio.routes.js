const express = require('express');
const { homeRoutes, aboutRoutes, contactRoutes, projectRoutes, sendEmailRoutes } = require('../controller/portfolio.controller')
const router = express.Router();

router.get('/', homeRoutes);
router.get('/about', aboutRoutes);
router.get('/project', projectRoutes);
router.get('/contact', contactRoutes);
router.post('/contact', sendEmailRoutes);
module.exports = router