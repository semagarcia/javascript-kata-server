module.exports = {
    port:   process.env.PORT || 3000,
    db:     process.env.MONGODB_URI || 'mongodb://localhost:27017/kata-player',
    secretJWT: process.env.SECRET_JWT || 'keeyyyyyy',
    jwtExpiration: process.env.JWT_EXP || '2h',
    github: {
        clientID: process.env.GITHUB_CLIENTID || '56d0a13332e7e192ca98',
        clientSecret: process.env.GITHUB_CLIENT_SECRET || 'db9b314ca7cf2aa7eba5fd2f22afe5ff46f4c279',
        callbackURL: process.env.GITHUB_CALLBACK_URL || 'http://127.0.0.1:3000/auth/github/callback'
    },
    twitter: {}
}