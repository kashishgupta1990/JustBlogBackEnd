# Hapi Mongoose Boilerplate #

This Boilerplate ready to use pack with very exciting feature of Hapi and Mongoose.We have added some common plugin which can be used as per required.This boilerplate gives you kick start to your Node Application Server.
Boilerpalte support ``ECAM Script 6`` syntax, we use Traceur library as a plugin. We are Hapi to release this exciting version to build your Node app on HapiMongooseBoilerplate ``v0.0.1`` release inspired by Kushal likhi boilerplate. 

## Boilerplate Structure ##
  - config
    - Bootstrap.js
    - Config.json
    - plugin.json
  - custom_modules
   - custom-imagemim-log
   - custom_redis
   - es6Support
   - global-utility
   - mongooseAuto
  - mongooseDomain
   - SampleModel.js
   - User.js
   - add more models yourself ...
  - route
   - api
       - test1.js
       - add more file yourself ...
   - example
       - auth.js 
       - dbOperation.js
       - ecma6api.js
       - redisOperation.js
       - restapi.js
       - add more file yourself ...
    - sample
       - restapi.js
       - add more files yourself...
       - add more files yourself...
   - add more route folder yourself... 

###Download###
```bash
git clone git@github.com:kashishgupta1990/HapiMongooseBoilerplate.git
```

## Documentation ##

### Setting up your configration ###

#### ``Bootstrap.js`` is a task runner file which executes automaticly on application start according to     approprate envirnment.Lets see quick example How to create task named ``Test`` and run on ``development`` envirnment ####
```javascript
module.exports = function (environment, callback) {

    //Add your task name here
    var env = {
        "development": [Test]
    };
   
    //Create your task like function
    function Test(callback) {
        log.cool('Test Task Runner');
        callback(null, 'Test Task Runner')
    }
};
```
#### ``Config.json`` contains all the application level configration variables. We can you config.json file variable by  ``_config`` global variable. Here we have example of ``development`` config. ####
```javascript
"development": {
    "server": {
      "host": "localhost",
      "port": "7002",
      "allowCrossDomain": true
    },
    "database": {
      "url": "mongodb://localhost:27017/boilerplate",
      "poolSize": 5,
      "tryToConnect": true
    },
    "cookie": {
      "password": "secret",
      "cookie": "hm-boilerplate",
      "redirectTo": "/login",
      "isSecure": false
    },
    "redis": {
      "resource": "",
      "host": "enter-your-redis-host-name",
      "port": 17203,
      "password": "your-password"
    }
  }
```
#### ``plug.json`` you can plug or unplug your boilerplate extra feature like Hapi Swagger etc. Lets have look on plug.json config. ####
```javascript
{
  "hapiPlugin": {
    "Swagger": true,
    "hapiAuthCookie": true
  },
  "ecma6Plugin": {
    "enabled": true,
    "debug": false 
  }
}
```
### Create Mongoose Domain and Modal ###

#### ``mongooseDomain`` is a home for all mongoose domain, we just have to create file like ``User.js`` write your mongoose schema into file thats all. You can access your mongoose modal form every where in boilerplate (routes, bootstarp files) by ``Modal`` object it has every thing you need.Lets see example ####
##### ``Define User Domain`` in /mongooseDomain/User.js #####
```javascript
"use strict";

//Define User Schema
//Refer: http://mongoosejs.com/docs/schematypes.html
module.exports = {
    username: String,
    password: String
};
```
##### ``Use User Modal`` any where from routs / bootstrap
```javascript
//Save New User
 new Modal.User({
      username: "admin",
      password: "admin"
    }).save(function (err, result) {
               if (err) {
                  log.error("Error Save Record: " + err);
               } else {
                  log.cool('User Save Successfully');
               }
       })

//Get User
Modal.User.find({username: 'admin'}, function (err, data) {
            if (err) {
                log.error(err);
            } else {
                log.cool(data);
            }
})
```
## Lets Build Together ##
Just open an issue in case found any bug.We are always open for suggessions / issue / add new feature request.
