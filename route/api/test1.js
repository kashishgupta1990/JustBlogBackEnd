"use strict";

var Joi = require('joi');

//Routs Lists
module.exports = [
    {
        method: 'GET',
        path: '/api/product1',
        config: {
            description: 'Get todo',
            notes: 'Returns a todo item by the id passed in the path',
            tags: ['api'],
            handler: function (request, reply) {
                reply({status: 'My First API hit product'});
            }
        }
    },
    {
        method: 'GET',
        path: '/api/product2',
        config: {
            description: 'Get todo',
            notes: 'Returns a todo item by the id passed in the path',
            tags: ['api'],
            handler: function (request, reply) {
                reply({status: 'My First API hit product'});
            }
        }
    }
];