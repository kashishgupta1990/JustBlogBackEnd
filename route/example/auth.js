"use strict";

//Require for validation
var Joi = require('joi');

//Routs Lists
//Refer: http://hapijs.com/tutorials/routing
module.exports = [
    {
        path: '/example/auth/login',
        method: 'POST',
        config: {
            description: 'Auth User Login',
            notes: 'Try to login your self',
            tags: ['api'],
            validate: {
                payload: {
                    username: Joi.string().min(5).required(),
                    password: Joi.string().required()
                }
            },
            auth: {
                mode: 'try',
                strategy: 'session'
            },
            plugins: {
                'hapi-auth-cookie': {
                    redirectTo: false
                }
            },
            handler: function (request, reply) {

                //Checking api authenticated
                //If-> YES goto /example/auth/secure
                //ELSE -> do nothing
                if (request.auth.isAuthenticated) {
                    return reply.redirect('/example/auth/secure');
                }

                //Creating User Object
                var user = {
                    username: request.payload.username,
                    password: request.payload.password
                };

                //Check Database if User Exist
                Modal.User.find(user, function (err, data) {
                    if (err) {
                        log.error(err);
                    } else {
                        if (data.length == 0) {
                            return reply({error: true, message: 'Unauthorized'})
                        } else {

                            //This line create secure bearer session
                            request.auth.session.set(user);
                            return reply({error: true, message: 'Authorized'});
                        }
                    }
                });
            }
        }
    },
    {
        path: '/example/auth/signup',
        method: 'POST',
        config: {
            description: 'Signup User',
            notes: 'Create your account',
            tags: ['api'],
            validate: {
                payload: {
                    username: Joi.string().min(5).required(),
                    password: Joi.string().required()
                }
            },
            auth: {
                mode: 'try',
                strategy: 'session'
            },
            plugins: {
                'hapi-auth-cookie': {
                    redirectTo: false
                }
            },
            handler: function (request, reply) {

                //Creating User Object
                var user = {
                    username: request.payload.username,
                    password: request.payload.password
                };

                //Check Database if User Exist
                Modal.User.find({username: user.username}, function (err, data) {
                    if (err) {
                        log.error(err);
                        reply({error: true, message: err});
                    } else {
                        if (data.length == 0) {

                            //Creating New User
                            new Modal.User(user).save(function (err, result) {
                                if (err) {
                                    log.error("Error Save Record: " + err);
                                    reply({error: true, message: err});
                                } else {
                                    log.cool('User Created Successfully');
                                    reply({error: false, message: 'User Created Successfully'})
                                }
                            })
                        } else {
                            log.warn('Username already in use');
                            reply({error: false, message: 'Username already in use'});
                        }
                    }
                });
            }
        }
    },
    {
        path: '/example/auth/unsecure',
        method: 'GET',
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
        path: '/example/auth/secure',
        method: 'GET',
        config: {
            description: 'This is open and secure',
            notes: 'Yes, I am secure',
            tags: ['api'],
            auth: 'session', //Add this property to make your api url secured
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
        path: '/example/auth/logout',
        method: 'POST',
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