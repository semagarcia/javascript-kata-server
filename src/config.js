module.exports = {
    port:   process.env.PORT || 3000,
    db:     process.env.MONGODB_URI || 'mongodb://localhost:27017/kata-player',
    secretToken: process.env.SECRET_TOKEN || 'claveeeee',
    secretJWT: process.env.SECRET_JWT || 'keeyyyyyy'
}