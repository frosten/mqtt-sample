'use strict';

var util = require('util');
var config = require('./config.js').config;
var JWTManager = require('./classes/security.js').JWTManager;

class Engine {
    constructor() {
        let ClientManager = require('./client/client.js').ClientManager;
        let ServerManager = require('./server/server.js').ServerManager;

        let DEFAULT_CHANNEL = 'besiktas';

        /**
         * Server 
         */
        var sm = new ServerManager();

        sm.action(sm.events.READY, function () {
            util.log('mosca server is running');
            var clientReady = function () {
                util.log('client is ready');
                cm.action(cm.events.CONNECT, function () {
                    util.log('client connected');
                    cm.connect(DEFAULT_CHANNEL);
                    cm.publish(DEFAULT_CHANNEL, "Hello world");
                });
            }

            /**
             * Client Facade
             */
            var cm = new ClientManager(config.mqtt_host, clientReady);
        });


        /**
         * Server Events
         */
        sm.action(sm.events.CLIENT_CONNECTED, function (client) {
            console.log('client connected', client.id);
        });

        sm.action(sm.events.PUBLISHED, function (packet, client) {
            console.log('Published', packet.payload);
        });
    }
}


var jwt = new JWTManager();
util.log(jwt.getToken({'cid': 1}));

var engine = new Engine();