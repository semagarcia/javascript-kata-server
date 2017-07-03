import { AuthUtil } from './AuthUtil';
import { ROLES } from './../schemas/User';

export class AuthPolicies {

    /**
     * Reference to roles defined
     */
    static ROLES = ROLES;

    /**
     * This method will check if the user is authenticated, if the security header exists and also
     * verifies if it is valid
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

    /**
     * The "req.user" user session object is available because previous to this, we have to set
     * the "passport.authorize('jwt')" as needed. This middleware is who will put the user info
     * into the session (deserialized)
     * @param role Role to check
     */
    static requiresRole(role: string) {
        return (req, res, next) => {
            if(!req.user) {
                // There is no session, error
                res.status(401).json({
                    error: 'ER-L-104',
                    message: 'You have to be logged'
                });
            } else if(req.user && req.user.role === role) {
                // Validation and check OK
                next();
            } else {
                // Validation and check error
                res.status(401).json({
                    error: 'ER-L-104',
                    message: 'You are not authorized'
                });
            }
        };
    }

}