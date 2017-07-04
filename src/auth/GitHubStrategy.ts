import { Passport } from 'passport';
const GitHubStrategy = require('passport-github2').Strategy;
import { User, UserModel } from './../schemas/User';
import { UsersService } from './../users/UserService';
const config = require('./../config');

export function initGitHubtrategy(passport: Passport) {
    const userSrv: UsersService = new UsersService();
    passport.use(
        new GitHubStrategy({
            clientID: config.github.clientID,
            clientSecret: config.github.clientSecret,
            callbackURL: config.github.callbackURL
        }, async (accessToken, refreshToken, profile, done) => {            
            await userSrv.findOrCreateUserByGitHub(profile)
                .then((user) => done(null, user))
                .catch((err) => done(err, null))
        })
    );

};


/*
>> access:  787eef58151ecdbe81a10362d9fc3386c977001b
>> refresh:  undefined
>> profile:  { id: '10792397',
  displayName: 'Sema',
  username: 'semagarcia',
  profileUrl: 'https://github.com/semagarcia',
  provider: 'github',
  _json:
   { login: 'semagarcia',
     id: 10792397,
     avatar_url: 'https://avatars2.githubusercontent.com/u/10792397?v=3',
     gravatar_id: '',
     url: 'https://api.github.com/users/semagarcia',
     html_url: 'https://github.com/semagarcia',
     followers_url: 'https://api.github.com/users/semagarcia/followers',
     following_url: 'https://api.github.com/users/semagarcia/following{/other_user}',
     gists_url: 'https://api.github.com/users/semagarcia/gists{/gist_id}',
     starred_url: 'https://api.github.com/users/semagarcia/starred{/owner}{/repo}',
     subscriptions_url: 'https://api.github.com/users/semagarcia/subscriptions',
     organizations_url: 'https://api.github.com/users/semagarcia/orgs',
     repos_url: 'https://api.github.com/users/semagarcia/repos',
     events_url: 'https://api.github.com/users/semagarcia/events{/privacy}',
     received_events_url: 'https://api.github.com/users/semagarcia/received_events',
     type: 'User',
     site_admin: false,
     name: 'Sema',
     company: null,
     blog: '',
     location: null,
     email: null,
     hireable: null,
     bio: null,
     public_repos: 28,
     public_gists: 2,
     followers: 11,
     following: 10,
     created_at: '2015-02-01T02:14:40Z',
     updated_at: '2017-05-25T20:53:59Z' } }
*/