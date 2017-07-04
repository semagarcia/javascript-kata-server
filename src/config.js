module.exports = {
    port:   process.env.PORT || 3000,
    db:     process.env.MONGODB_URI || 'mongodb://localhost:27017/kata-player',
    secretJWT: process.env.SECRET_JWT || 'keeyyyyyy',
    jwtExpiration: process.env.JWT_EXP || 1800,
    github: {
        clientID: process.env.GITHUB_CLIENTID || 'b1e8259c8492bb8d6483',
        clientSecret: process.env.GITHUB_CLIENT_SECRET || 'ccde7e00075e1bdf2b127a1e8013c3830f51df7a',
        callbackURL: process.env.GITHUB_CALLBACK_URL || 'http://127.0.0.1:3000/auth/github/callback'
    },
    twitter: {}
}