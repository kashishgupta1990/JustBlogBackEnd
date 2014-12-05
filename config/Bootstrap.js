"use strict";

var async = require('async');

module.exports = function (environment, callback) {

    //Add your task name here
    var env = {
        "common": [CreateSuperUser, Test],
        "development": [CreateSuperUser],
        "production": [CreateSuperUser, Test]
    };

    function play(environment) {
        async.series(env[environment], function (err, result) {
            log.cool('Booting process completed.');
            callback(err, result);
        })
    }

    play(environment);

    //Write your task here
    function CreateSuperUser(callback) {
        Modal.User.find({username: 'admin'}, function (err, data) {
            if (err) {
                log.error(err);
            } else {
                if (data.length == 0) {
                    new Modal.User({
                        username: "admin",
                        password: "admin"
                    }).save(function (err, result) {
                            if (err) {
                                log.error("Error Save Record: " + err);
                            } else {
                                log.cool('Super User Created Successfully');
                            }
                        })
                } else {
                    log.cool('Super User Already Available');
                }
            }
            callback(err,'user saved');
        });
    }

    function Test(callback) {
        log.cool('Test Task Runner');
        callback(null, 'Test Task Runner')
    }
};

