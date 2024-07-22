import express from 'express';

import { getAllEvents } from '../controllers/getAllEvents';
import { getEventById } from '../controllers/getEventById';
import { getUpcomingEvents } from '../controllers/getUpcomingEvents';

const router = express.Router();

router.get('/todos-eventos', getAllEvents);
router.get('/evento/:id', getEventById);
router.get('/proximos-eventos', getUpcomingEvents);

export default router;
