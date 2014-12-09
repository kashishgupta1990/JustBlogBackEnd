"use strict";

var Joi = require('joi');

//Routs Lists
module.exports = [
    {
        method: 'GET',
        path: '/rest/test/test1',
        config: {
            description: 'Get Test-1',
            notes: 'Yes, I am doing testing',
            tags: ['api'],
            handler: function (request, reply) {
                redis.set('name','kashish');
                reply({status: 'I am Test-1 API'});
            }
        }
    },
    {
        method: 'GET',
        path: '/rest/test/special',
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
        method: ['GET', 'POST'],
        path: '/rest/test/test2',
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