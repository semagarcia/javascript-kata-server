import { Router, Request, Response } from 'express';
import { ChallengeService } from './ChallengeService';

// Dependencies
const challengeSrv: ChallengeService = new ChallengeService();

// Assign router to the express.Router() instance
const challengeRouter: Router = Router();

/**
 * Method:
 * Verb:
 * Route: /api/challenges
 */
challengeRouter.get('/', async(req: Request, res: Response) => {
    // { challenges:Array.from(challenges) }
    await challengeSrv.getChallenges()
        .then((challenges) => res.status(200).json(challenges))
        .catch((err) => res.status(400).send('KO'));
});

/**
 * Method:
 * Verb:
 * Route: /api/challenges/challenge/:challengeId
 */
challengeRouter.get('/challenge/:challengeId', async(req: Request, res: Response) => {
    // { challenge: challenge }
    await challengeSrv.getChallenge(req.params.challengeId)
        .then((challenge) => res.status(200).json(challenge))
        .catch((err) => res.status(400).send('KO'));
});

/**
 * Method:
 * Verb:
 * Route: /api/challenges/create
 */
challengeRouter.post('/create', async(req: Request, res: Response) => {
    // { uuid: uuid }
    if(req.body.playerId, req.body.direction && req.body.duration >= 0 && req.body.mode) {
            await challengeSrv.createNewChallenge(
                req.body.playerId, req.body.direction, req.body.duration, req.body.mode, null)
                .then((uuid) => res.json(uuid))
                .catch((err) => res.status(500).send({ error: 'C1OP3' }));
        } else {
            res.status(500).send('Minimum fields not filled');
        }
});

/**
 * Method:
 * Verb:
 * Route: /api/challenges/check-challenge-id/:challengeId
 */
challengeRouter.get('/check-challenge-id/:challengeId', async(req: Request, res: Response) => {
    // { exists:existsChallengeId }
    await challengeSrv.checkChallengeId(req.params.challengeId)
        .then((existsChallengeId) => res.status(200).json(existsChallengeId))
        .catch((err) => res.status(400).send('KO'));
});

/**
 * Method:
 * Verb:
 * Route: /api/challenges/join
 */
challengeRouter.post('/join', async(req: Request, res: Response) => {
    await challengeSrv.joinPlayerIntoChallenge(req.body.challengeId, req.body.username, req.body.playerId)
        .then((challenge) => res.status(200).json(challenge))
        .catch((err) => res.status(400).send('KO'));
});

// Export the express.Router() instance
export const ChallengesController: Router = challengeRouter;