import { Router, Request, Response } from 'express';
import { EmailService } from './EmailService';

// Dependencies
const emailSrv: EmailService = new EmailService();

// Assign router to the express.Router() instance
const emailRouter: Router = Router();

/**
 * Method: 
 * Verb: POST
 * Route: /api/events
 */
emailRouter.post('/', async(req: Request, res: Response) => {
	let { from, to, subject, message } = req.body;
	console.log(req.body);
	await emailSrv.sendMail(from, to, subject, message)
		.then(_ => res.sendStatus(200))
		.catch(error => res.status(400).send(error));
});

export const EmailController: Router = emailRouter;