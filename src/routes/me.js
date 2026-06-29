import express from 'express';
import MeController from '../app/controllers/MeController.js';

const router = express.Router();

router.get('/trash/show', MeController.showTrashCourse);
router.patch('/:id/restore', MeController.restore)

export default router;