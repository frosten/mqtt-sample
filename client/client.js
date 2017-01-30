'use strict';

var util = require('util');
var config = require('./../config.js').config;

class ClientManager {
    /**
     * Default constructor for Client Manager
     * @param {string} host host address
     * @param {function} ready callback function
     */
    constructor(host, ready) {
        util.log('initated...');
        let mqtt = require('mqtt');
        this.host = host || config.MQTT_HOST
        
        this.events = {
            CONNECT: 'connect'
        }

        this.client = mqtt.connect(this.host, {
             /*Beware that you are exposing yourself to man in the middle attacks, so it is a configuration that is not recommended for production environments.*/
            rejectUnauthorized: false
        });

        this.client.on(this.events.connect, ready);
    }

    action(event, callback) {
        this.client(event, callback);
    }

    /**
     *  MQTT subscribe channel
     */
    connect(channel) {
        this.client.subscribe(channel)
    }

    /**
     * Send message 
     */
    publish(channel, message) {
        this.client.publish(channel, message);
    }
    /**
     * MQTT message
     * 
     * @param {string} topic 
     * @param {string} message
     */
    message(topic, message) {
        console.log(message.toString())
        this.client.end()
    }

    /**
     * eof
     */
    end() {
        this.client.end();
    }

}

module.exports.ClientManager = ClientManager;