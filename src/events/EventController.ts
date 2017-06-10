import { Router, Request, Response } from 'express';
import { EventService } from './EventService';

// Assign router to the express.Router() instance
const router: Router = Router();
const eventSrv: EventService = new EventService();

router.get('/', async (req: Request, res: Response) => {
    await eventSrv.getEvents()
        .then((events) => {
            res.status(200).send(events);
        })
        .catch((err) => {
            console.log('getEvents()::catch => ', err);
            res.status(400).send('KO');
        });
});

// Export the express.Router() instance
export const EventsController: Router = router;



// -------------------------------------------
/*export class EventsController {
    public eventsRouter: Router = Router();
    private eventSrv: EventService = new EventService();

    constructor() {
        this.eventsRouter.get('/', this.m);
    }

    //
    // Method:
    // Route: 
    //
    private m(req: Request, res: Response) {
        async() => {
            await this.eventSrv.getEvents()
                .then((events) => {
                    console.log('getEvents()::then => ', events);
                    res.status(200).send('OK');
                })
                .catch((err) => {
                    console.log('getEvents()::catch => ', err);
                    res.status(400).send('KO');
                });
        }
    }

}*/
