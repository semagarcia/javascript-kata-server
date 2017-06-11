import { Router, Request, Response } from 'express';
import { TrainingPathService } from './TrainingService';

// Dependencies
const trainingSrv: TrainingPathService = new TrainingPathService(); 

// Assign router to the express.Router() instance
const tpRouter: Router = Router();

/**
 * Method:
 * Verb:
 * Route: 
 */
tpRouter.post('/', async(req: Request, res: Response) => {
    let { topic, name, description } = req.body;
    // { created: newTP }
    await trainingSrv.createNewTrainingPath(topic, name, description)
        .then((newTrainingPath) => res.status(200).send(newTrainingPath))
        .catch((err) => res.status(400).send('KO'))
});

/**
 * Method:
 * Verb:
 * Route: 
 */
tpRouter.get('/', async(req: Request, res: Response) => {
    // { trainingPaths: trainingPaths }
    await trainingSrv.getTrainingPathsWithoutKatas()
        .then((trainingPaths) => res.status(200).send(trainingPaths))
        .catch((err) => res.status(400).send('KO'));
});

/**
 * Method:
 * Verb:
 * Route: 
 */
tpRouter.get('/grid', async(req: Request, res: Response) => {
    // { trainingPaths: trainingPaths }
    await trainingSrv.getTrainingPathsForGrid()
        .then((trainingPaths) => res.status(200).send(trainingPaths))
        .catch((err) => res.status(400).send('KO'));
});

/**
 * Method:
 * Verb:
 * Route: 
 */
tpRouter.get('/topic/:topic', async(req: Request, res: Response) => {
    // { tPath: tPath }
    await trainingSrv.getTrainingPathByTopic(req.params.topic)
        .then((trainingPath) => res.status(200).send(trainingPath))
        .catch((err) => res.status(400).send('KO'));
});

/**
 * Method:
 * Verb:
 * Route: 
 */
tpRouter.get('/:topic/katas', async(req: Request, res: Response) => {
    // { trainingPath: katas }
    await trainingSrv.getKatasOfTrainingPathByTopic(req.params.topic)
        .then((katas) => res.status(200).send(katas))
        .catch((err) => res.status(400).send('KO'));
});

/**
 * Method:
 * Verb:
 * Route: 
 */
tpRouter.get('/id/katas/:pathId', async(req: Request, res: Response) => {
    // { katas: exercises }
    await trainingSrv.getKatasByTrainingPathId(req.params.pathId)
        .then((exercises) => res.status(200).send(exercises))
        .catch((err) => res.status(400).send('KO'));
});

// Export the express.Router() instance
export const TrainingPathController: Router = tpRouter;