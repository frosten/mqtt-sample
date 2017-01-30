'use strict';

var mosca = require('mosca');
var config = require('./../config.js').config;

class ServerManager {
    constructor() {
        let settings = {
            port: 8883,
            backend: {
                type: 'mongo',
                url: config.MONGO_PATH,

            },
            secure: {
                keyPath: config.SECURE_KEY,
                certPath: config.SECURE_CERT
            },
        };

        this.server = new mosca.Server(settings);

        this.events = {
            READY: 'ready',
            PUBLISHED: 'published',
            CLIENT_CONNECTED: 'clientConnected'
        }
    }

    action(event, callback) {
        this.server.on(event, callback);
    }
}

module.exports.ServerManager = ServerManager;
