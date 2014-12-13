"use strict";

var Joi = require('joi');

//Routs Lists
module.exports = [
    {
        path: '/rest/test/test1',
        method: 'GET',
        config: {
            description: 'Get Test-1',
            notes: 'Yes, I am doing testing',
            tags: ['api'],
            handler: function (request, reply) {
                redis.set('name', 'kashish');
                reply({status: 'I am Test-1 API'});
            }
        }
    },
    {
        path: '/rest/test/special',
        method: 'GET',
        config: {
            description: 'Get Test-1',
            notes: 'Yes, I am doing testing',
            tags: ['api'],
            handler: (request, reply)=> {
                reply({status: 'my ecma6 special reply'});
            }
        }
    },
    {
        path: '/rest/test/test2',
        method: ['GET', 'POST'],
        config: {
            description: 'Get Test-2',
            notes: 'Yes, I am doing testing',
            tags: ['api'],
            handler: function (request, reply) {
                reply({status: 'I am Test-2 API'});
            }
        }
    }
];