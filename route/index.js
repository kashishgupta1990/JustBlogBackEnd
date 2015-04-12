"use strict";

var Joi = require('joi');

//Routs Lists
//Refer: http://hapijs.com/tutorials/routing
module.exports = [
    {
        method: 'GET',
        path: '/',
        config: {
            handler: function (request, reply) {
                reply('Welcome to Hapi Mongoose Boilerplate');
            }
        }
    }
];