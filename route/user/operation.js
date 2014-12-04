"use strict";

var Joi = require('joi');

//Routs Lists
module.exports = [
    {
        method: 'POST',
        path: '/user',
        config: {
            validate: {
                payload: {
                    username: Joi.string().required(),
                    password: Joi.string().required()
                }
            },
            description: 'Get Test-2',
            notes: 'Yes, I am doing test value',
            tags: ['api'],
            handler: function (request, reply) {

                //Using User Model like this
                new Modal.User({
                    username: request.payload.username,
                    password: request.payload.password
                }).save(function (err, result) {
                        if (err) {
                            reply({status: 'User not saved'});
                        } else {
                            log.cool('Super User Created Successfully');
                            reply({status: 'User Successfully Added'});
                        }
                    });
            }
        }
    }
];