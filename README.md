# Hapi Mongoose Boilerplate

This Boilerplate ready to use pack with very exciting feature of Hapi and Mongoose.We have added some common plugin which can be used as per required.This boilerplate gives you kick start to your Node Application Server.
We are Hapi to release this exciting version to build your Node app on HapiMongooseBoilerplate ``v0.0.1`` release inspired by Kushal likhi boilerplate. 

## Boilerplate Structure 
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

##Installation##
This library is available for **Node** and **Browser** both. See the installation steps below:

###Download###
```bash
git clone git@github.com:kashishgupta1990/HapiMongooseBoilerplate.git
```

## Documentation
## Setting up your configration 
     - **Bootstrap.js** is a task runner file which executes automaticly on application start according to     approprate envirnment. Here is a quick sneak peak of the usage:
     ```javascript
    require('operator-overloading');
     (function () {
     //A simple student constructor
      function Student(name, marks) {
        var _this = this;
        this.name = name;
        this.marks = marks;
        //THIS is WHERE we OVERLOAD '+' Operator
        this.__plus = function (leftOperand) {
            return new Student([leftOperand.name, _this.name].join('+'), leftOperand.marks + _this.marks);
        };
        this.toString = function () {
            return _this.name + ':' + _this.marks;
        };
    }
}.enableOverloading()/*Here you are enabling overloading for this function scope only*/)();

```

     
    

## Example

## Lets Build Together
Just open an issue in case found any bug.We are always open for suggessions / issue / add new feature request.
