import { Router, Request, Response } from 'express';
import { EventService } from './EventService';
import { AuthPolicies } from './../auth/AuthPolicies';
const passport = require('passport');

// Dependencies
const eventSrv: EventService = new EventService();

// Assign router to the express.Router() instance
const eventsRouter: Router = Router();

/**
 * Method: 
 * Verb: GET
 * Route: /api/events
 */
eventsRouter.get('/', async (req: Request, res: Response) => {
    await eventSrv.getEvents()
        .then((events) => res.status(200).send(events))
        .catch((err) => res.status(400).send('KO'));
});

/**
 * Method: 
 * Verb: GET
 * Route: /api/events
 */
eventsRouter.get('/all', [
    passport.authenticate('jwt'),
    AuthPolicies.requiresLogin,
    AuthPolicies.requiresRole(AuthPolicies.ROLES.ADMIN)
], async(req: Request, res: Response) => {
    await eventSrv.getAllInfoOfEvents()
        .then((events) => res.status(200).send(events))
        .catch((err) => res.status(400).send('KO')); 
});

/**
 * Method: 
 * Verb: POST
 * Route: /api/events
 */
eventsRouter.post('', async(req: Request, res: Response) => {
    await eventSrv.createEvent(
        req.body.name, 
        req.body.startDate, 
        req.body.description, 
        req.body.urlLoc, 
        req.body.endDate)
            .then((createdEvent) => res.status(200).send(createdEvent))
            .catch((err) => res.status(400).send('KO'));
});

/**
 * Method: 
 * Verb: PUT
 * Route: /api/events
 */
eventsRouter.get('', async(req: Request, res: Response) => {
    await eventSrv.editEvent(req.body.eventToModify)
        .then((updatedEvent) => res.status(200).send(updatedEvent))
        .catch((err) => res.status(400).send('KO'));
});

/**
 * Method: 
 * Verb: POST
 * Route: /api/events
 */
eventsRouter.get('/delete', async(req: Request, res: Response) => {
    await eventSrv.deleteEvents(req.body.eventIds)
        .then((deleteResult) => res.status(200).send(deleteResult))
        .catch((err) => res.status(400).send('KO'));
        
});

// Export the express.Router() instance
export const EventsController: Router = eventsRouter;
