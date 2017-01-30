var configuration = {
    MQTT_HOST: 'mqtts://127.0.0.1:8883',
    MONGO_PATH: 'mongodb://root:1q2w3ecosa@ds137139.mlab.com:37139/cosa',
    TOKEN_PRIVATE_KEY: 'f3r1t',
    TOKEN_EXPIRE: { expiresIn: 60 * 60 },
    SECURE_KEY: __dirname + '/ssl/server.key',
    SECURE_CERT: __dirname + '/ssl/server.crt',
}

exports.config = configuration;

