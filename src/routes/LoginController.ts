import { Router, Request, Response } from 'express';

// Assign router to the express.Router() instance
const router: Router = Router();

// route: /standard-login/login
router.post('/login', async (req: Request, res: Response) => {
    let { user, password } = req.body;
    console.log(`Login request received with: ${user}/${password}`);
    if(user === 'admin' && password === 'password') {
        console.log('Antes de await');
        let x = await ls(); 
        console.log('X >> ', x);
        res.send({a:1, nest:x});
        console.log('After res.send()');
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

async function ls() {
    console.log('Entering ls()');
    return new Promise(async(resolve, reject) => {
        var spawn = require('child_process').spawn;
        var npmTest = spawn('ls', ['-lhtr']);
        var output = [];

        npmTest.stdout.on('data', function (data) {
            console.log('Data >>> ', data.toString());
            output.push(data.toString());
        });
        npmTest.on('close', function (code) {
            console.log('npm closing');
            resolve(output.join('\n'));
        });
    });
}

// Export the express.Router() instance
export const LoginRoutesController: Router = router;