import { Router, Request, Response } from 'express';
import { IndividualService } from './IndividualService';

// Dependencies
const individualKataSrv: IndividualService = new IndividualService();

// Assign router to the express.Router() instance
const individualRouter: Router = Router();

/**
 * Method:
 * Route: 
 */
individualRouter.get('/random', async(req: Request, res: Response) => {
    // { status:'ok', kata: randomKata }
    await individualKataSrv.getRandomIndividualKata()
        .then((randomKata) => res.status(200).send(randomKata))
        .catch((err) => res.status(400).send('KO'));
});

// Export the express.Router() instance
export const IndividualController: Router = individualRouter;