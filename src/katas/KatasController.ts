import { Router, Request, Response } from 'express';
import { KatasService } from './KatasService';

// Dependencies
const katasSrv: KatasService = new KatasService();

// Assign router to the express.Router() instance
const katasRouter: Router = Router();

/**
 * Method:
 * Verb:
 * Route: /api/katas
 */
katasRouter.get('/', async(req: Request, res: Response) => {
    // { katas: katas }
    await katasSrv.getAllKatas()
        .then(kata => res.send(kata))
        .catch((err) => res.status(400).send(err));
});

/**
 * Method:
 * Verb:
 * Route: /api/katas/kata
 */
katasRouter.get('/kata/:kataId', async(req: Request, res: Response) => {
    await katasSrv.getKataById(req.params.kataId)
        .then(kata => res.send(kata))
        .catch((err) => res.status(400).send(err));
});

/**
 * Method:
 * Verb:
 * Route: /api/katas/execute
 */
katasRouter.post('/execute', async(req: Request, res: Response) => {
    // { result: kataResult }
    await katasSrv.executeTest(req.body.function, req.body.name)
        .then(kataResult => res.status(200).json(kataResult))
        .catch((err) => res.status(400).send(err));
});

/**
 * Method:
 * Verb:
 * Route: /api/katas/stats
 */
katasRouter.get('/stats', async(req: Request, res: Response) => {
    // { stats: katasStats }
    await katasSrv.getAllKatasStatistics()
        .then(katasStats => res.send(katasStats))
        .catch((err) => res.status(400).send(err));
});

/**
 * Method:
 * Verb:
 * Route: /api/katas/stats/register
 */
katasRouter.post('/stats/register', async(req: Request, res: Response) => {
    // { result: result }
    await katasSrv.updateKataStatistics(
        req.body.stats, 
        null, null
        /*req.session.username, 
        req.session.email*/)
            .then(result => res.send(result))
            .catch((err) => res.status(400).send(err));
});

// Export the express.Router() instance
export const KatasController: Router = katasRouter;