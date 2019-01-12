var Hello = require('./utils/hello');

hello = new Hello();
hello.setName('tom');
hello.sayHello();


var Jerry = require('./utils/singleObject').Hello;

jerry = new Jerry();
jerry.setName('jerry');
jerry.sayHello();