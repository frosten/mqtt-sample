'use strict';
var jwt = require('jsonwebtoken');
var config = require('./../config.js').config;
var fs = require('fs');

class JWTManager {
    constructor() {
        this._certificate = fs.readFileSync(config.SECURE_KEY);  // get private key 
    }

    getToken(data) {
        //var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
        return jwt.sign(data, this._certificate, config.TOKEN_EXPIRE);
    }
}

 module.exports.JWTManager = JWTManager;