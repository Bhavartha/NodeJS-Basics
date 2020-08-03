const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('e',(p1,p2)=>console.log(p1+p2));

eventEmitter.emit('e',10,20);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }
    get name(){
        return this._name;
    }
}

let alice = new Person('Alice');
let bob = new Person('Bob');

alice.on('name',()=>console.log(alice.name));
bob.on('name',()=>console.log(bob.name))

alice.emit('name');
bob.emit('name');