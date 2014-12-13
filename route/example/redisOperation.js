"use strict";

var Joi = require('joi'),
    redis = require('../../custom_redis/main');

//Routs Lists
module.exports = [
    {
        method: 'GET',
        path: '/api/connectRedis',
        config: {
            description: 'Get Test-1',
            notes: 'Yes, I am doing testing',
            tags: ['api'],
            handler: function (request, reply) {
                new redis().start(function (err, client) {
                    client.set('table:user', 'kashish');
                    client.get('table:user', function (err, data) {
                        reply({status: data});
                    });
                });
            }
        }
    }
];