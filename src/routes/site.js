import express from 'express';
import SiteController from '../app/controllers/SiteController.js';

const router = express.Router();

router.get('/courses/show', SiteController.show)
router.get('/search', SiteController.search);
router.get('/', SiteController.index);

export default router;