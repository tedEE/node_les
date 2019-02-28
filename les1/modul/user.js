function User(name){
        this.name = name;
}

User.prototype.seyHello = function (who){
        console.log('Hello '+who.name+' I am '+this.name);
}

module.exports = {User};
