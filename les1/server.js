let usr = require('./modul/user');
let db = require('db');
db.connect();

function run(){
        var vasia = new usr.User(db.getName('vas'));
        var lena = new usr.User(db.getName('len'));
        lena.seyHello(vasia);
}

if(module.parent){
        exports.run = run
}else{
        run();
}

