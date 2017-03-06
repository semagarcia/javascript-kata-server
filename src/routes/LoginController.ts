import { Router, Request, Response } from 'express';

// Assign router to the express.Router() instance
const router: Router = Router();

// route: /standard-login/login
router.post('/login', (req: Request, res: Response) => {
    let { user, password } = req.body;
    console.log(`Login request received with: ${user}/${password}`);
    if(user === 'admin' && password === 'password') {
        res.send({ logged:true, role:'admin' });
    } else if(user === 'user' && password === 'password') {
        res.send({ logged:true, role:'player' });
    } else {
        res.send(401, { logged:false, message:'Bad credentials' });
    }
});

// route: /standard-login/logout
router.get('/logout', (req: Request, res: Response) => {
    res.redirect('/');
});

// Export the express.Router() instance
export const LoginRoutesController: Router = router;