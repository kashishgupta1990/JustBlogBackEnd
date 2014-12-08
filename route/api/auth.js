"use strict";

var Joi = require('joi');

//Routs Lists
//Refer: http://hapijs.com/tutorials/routing
module.exports = [
    {
        method: 'POST',
        path: '/api/auth/login',
        config: {
            description: 'Get Test-1',
            notes: 'Yes, I am doing testing',
            tags: ['api'],
            handler: function (request, reply) {

                //Checking are this api authenticated
                if (request.auth.isAuthenticated) {
                    return reply.redirect('/api/secure');
                }

                //Db hit and auth check
                var account = {
                    username: "admin",
                    password: "admin"
                };
                request.auth.session.set(account);
                return reply.redirect('/api/secure');
            },
            auth: {
                mode: 'try',
                strategy: 'session'
            },
            plugins: {
                'hapi-auth-cookie': {
                    redirectTo: false
                }
            }
        }
    },
    {
        method: 'GET',
        path: '/api/unsecure',
        config: {
            description: 'This is open and unsecure',
            notes: 'Yes, I am unsecure',
            tags: ['api'],
            handler: function (request, reply) {
                reply({status: 'I am open and unsecure API'});
            }
        }
    },
    {
        method: 'GET',
        path: '/api/secure',
        config: {
            description: 'This is open and secure',
            notes: 'Yes, I am secure',
            tags: ['api'],
            auth: 'session',
            plugins: {
                'hapi-auth-cookie': {
                    redirectTo: false
                }
            },
            handler: function (request, reply) {
                reply({status: 'I am secure API'});
            }
        }
    },
    {
        method: 'POST',
        path: '/api/auth/logout',
        config: {
            description: 'Logout',
            notes: 'Logout yourself',
            tags: ['api'],
            handler: function (request, reply) {
                request.auth.session.clear();
                return reply.redirect('/api/unsecure');
            }
        }
    }
];