import { Router, Request, Response } from 'express';

// Assign router to the express.Router() instance
const settingsRouter: Router = Router();

/**
 * Method: 
 * Verb: GET
 * Route: /api/login
 * Access conditions: The user have to be logged
 */
settingsRouter.get('/', async (req: Request, res: Response) => {
    res.send('Welcome to your user settings!');
});

// Export the express.Router() instance
export const SettingsController: Router = settingsRouter;