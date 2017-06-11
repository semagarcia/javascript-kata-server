import { Router, Request, Response } from 'express';
import { KatasService } from './../katas/KatasService';

// Dependencies
const katasSrv: KatasService = new KatasService();

// Assign router to the express.Router() instance
const rankingRouter: Router = Router();

/**
 * Method:
 * Route: 
 */
rankingRouter.get('/', async(req: Request, res: Response) => {
    // { ranking: katasStats }
    await katasSrv.getAllKatasStatistics()
        .then((katasStats) => res.status(200).send(katasStats))
        .catch((err) => res.status(400).send('KO'));
});

// Export the express.Router() instance
export const RankingController: Router = rankingRouter;