module.exports = {
    port:   process.env.PORT || 3000,
    db:     process.env.MONGODB_URI || 'mongodb://localhost:27017/kata-player',
    secretJWT: process.env.SECRET_JWT || 'keeyyyyyy',
    jwtExpiration: process.env.JWT_EXP || 10080
}