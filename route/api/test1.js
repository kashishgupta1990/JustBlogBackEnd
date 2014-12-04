"use strict";

var Joi = require('joi');

//Routs Lists
//Refer: http://hapijs.com/tutorials/routing
module.exports = [
    {
        method: 'GET',
        path: '/api/test/test11',
        config: {
            description: 'Get Test-1',
            notes: 'Yes, I am doing testing',
            tags: ['api'],
            handler: function (request, reply) {
                reply({status: 'I am Test-1 API'});
            }
        }
    },
    {
        method: 'POST',
        path: '/api/test/test2/{myvalue}',
        config: {
            validate: {
                params: {
                    myvalue: Joi.string()
                }
            },
            description: 'Get Test-2',
            notes: 'Yes, I am doing test value',
            tags: ['api'],
            handler: function (request, reply) {
                reply({
                    status: 'I am Test-2 API',
                    message: 'Your test value is ' + request.params.myvalue
                });
            }
        }
    }
];