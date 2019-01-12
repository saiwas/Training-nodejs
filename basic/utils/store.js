var TodoStore = (function() {
    const TOKEN_LEN = 32;
    const TOKEN_CHARS = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';

    var ACCOUNT_ID = 0;
    var TODO_ID = 1;

    var todos = [];
    var accounts = [{name: 'tom', password: '123', _id: 0}];

    function randomString() {

        var token = '';
        for (i = 0; i < TOKEN_LEN; i++) {
            token += TOKEN_CHARS.charAt(Math.floor(Math.random() * TOKEN_LEN));
        }
        return token;
    }

    return {
        listAll: function () {
            return todos;
        },
        create: function(todo) {
            todo._id = TODO_ID++;
            todos.push(todo);
            return todo;
        },
        update: function(todo) {
            todos.forEach(o => {
               if (o._id == todo._id) {
                   o.title = todo.title;
                   o.project = todo.project;
               }
            });
        },
        remove: function (todo) {
            var idx;
            for(var i = 0; i < todos.length; i++) {
                if (todos[i]._id == todo._id) {
                    idx = i;
                    break;
                }
            }
            if (idx != undefined) {
                todos.splice(idx, 1);
            }
        },
        get: function(_id) {
            var todo;
            for(var i = 0; i < todos.length; i++) {
                var t = todos[i];
                if (t._id == _id) {
                    todo = t;
                    break;
                }
            }
            return todo;
        },
        register: function(name, password) {
            var account = {
                name: name,
                password: password,
                _id: ACCOUNT_ID++,
            };
            accounts.push(account);
            return account;
        },
        login: function(name, password) {
            var token;
            var account;
            for(var i = 0; i < accounts.length; i++) {
                var a = accounts[i];
                if (a.name == name && password == password) {
                    account = a;
                    break;
                }
            }
            if (account != undefined) {
                token = randomString();
            }
            return token;
        }
    };

})();

exports = module.exports = TodoStore;
