import { Router, Request, Response } from 'express';

// Assign router to the express.Router() instance
const router: Router = Router();

/**
 * Method:
 * Route: 
 */
router.get('/', (req: Request, res: Response) => {
    res.send('Hello, ranking!');
});

// Export the express.Router() instance
export const RankingController: Router = router;