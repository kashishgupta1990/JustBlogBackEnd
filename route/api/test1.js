"use strict";

var Joi = require('joi'),
    redis = require('../../custom_redis/main');

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
        method: 'GET',
        path: '/api/connectRedis',
        config: {
            description: 'Get Test-1',
            notes: 'Yes, I am doing testing',
            tags: ['api'],
            handler: function (request, reply) {
               new redis().start(function (err, client) {
                   client.set('table:user','kashish');
                   client.get('table:user', function (err,data) {
                       reply({status: data});
                   });
                });
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