import { Router, Request, Response } from 'express';
import { AdministrationService } from './AdministrationService';
import { AuthPolicies } from './../auth/AuthPolicies';
const passport = require('passport');

// Dependencies
const adminSrv: AdministrationService = new AdministrationService();

// Assign router to the express.Router() instance
const adminRouter: Router = Router();

/*adminRouter.use([
    passport.authorize('jwt'),
    AuthPolicies.requiresLogin,
    AuthPolicies.requiresRole('ADMIN')
]);*/

/**
 * Method: 
 * Verb: GET
 * Route: /api/admin/configuration
 * Access conditions: The user have to be logged
 */
adminRouter.get('/configuration', async (req: Request, res: Response) => {
    await adminSrv.getAllConfigurations()
        .then((configs) => res.json(configs))
        .catch((err) => res.status(400).json(err));
});

/**
 * Method: 
 * Verb: GET
 * Route: /api/admin/configuration/:keyProperty
 * Access conditions: The user have to be logged
 */
adminRouter.get('/configuration/:keyProperty', async (req: Request, res: Response) => {
    await adminSrv.getConfiguration(req.params.keyProperty)
        .then((config) => res.json(config))
        .catch((err) => res.status(400).json(err));
});

/**
 * Method: 
 * Verb: PUT
 * Route: /api/admin/configuration
 * Access conditions: The user have to be logged
 */
adminRouter.put('/configuration', async (req: Request, res: Response) => {
    if(!req.body.key)
        res.status(422).json({ error: 'ER-AD-100', message: 'Forgotten mandatory fields' });

    await adminSrv.updateConfiguration(
            req.body.key, 
            req.body.description, 
            req.body.value, 
            req.body.dataType, 
            req.body.enabled)
        .then((config) => res.json(config))
        .catch((err) => res.status(400).json(err));
});

// Export the express.Router() instance
export const AdministrationController: Router = adminRouter;