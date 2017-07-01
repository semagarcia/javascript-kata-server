import { AuthUtil } from './AuthUtil';

export class AuthPolicies {

    /**
     * This method will check if the user is authenticated, if the security header exists and also
     * verifies if is valid
     * @param req Request's user object
     * @param res Response object
     * @param next Function to execute the next middleware
     */
    static async requiresLogin(req, res, next) { 
        const logged = (req.isAuthenticated()) ? true : false;
        const rawJwtToken = req.get('Authorization') || '';
        const jwtToken = rawJwtToken.slice(4);

        AuthUtil.verifyJwtToken(jwtToken)
            .then((payload) => next())
            .catch((err) => {
                return res.status(401).json({ error: 'ER-L-102', message: 'You have to be logged' });
            });
    };

    static requiresRole(role: string) {
        return (req, res, next) => {
            console.log('>> ROLES => ', role);
            console.log('>> session => ', req.user);
            if(req.user && req.user.role === role)
                next();
            else
                res.status(401).json({
                    error: 'ER-L-104',
                    message: 'You are not authorized'
                });
        };
    }

}