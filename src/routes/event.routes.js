import { Router } from 'express';
import { getAllEvents } from '../controllers/getAllEvents.controller.js';
import { getEventById } from '../controllers/getEventById.controller.js';
import { getUpcomingEvents } from '../controllers/getUpcomingEvents.controller.js'
import { getEventsByYear } from '../controllers/getEventsByYear.controller.js';
import { getEventsByName } from '../controllers/getEventsByName.controller.js';
import { addEvent } from '../controllers/addEvent.controller.js';


const eventRouter = Router();

eventRouter.get('/event/all', getAllEvents);
eventRouter.get('/event/:id', getEventById);
eventRouter.get('/next', getUpcomingEvents);
eventRouter.get('/event/year/:year', getEventsByYear);
eventRouter.get('/event/name/:name', getEventsByName);
eventRouter.post('/event', addEvent);

export { eventRouter };
