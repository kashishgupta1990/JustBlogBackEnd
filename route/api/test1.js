"use strict";

var Joi = require('joi'),
    redis = require('../../custom_redis/main');

//Routs Lists
//Refer: http://hapijs.com/tutorials/routing
module.exports = [
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