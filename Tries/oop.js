
const person = {
    name: 'Slava',
    lastNmae: 'Ivanova',
    _age: 36,
    isMarried: false,
    move: function (){
        console.log('moving')
    },
    setAge: function() {
        this._age +=1;
    },
    getAge: function (){
        return  this._age;
    },
    setLastName: function(lastName){
        this.lastNmae = lastName
    }
}

person.setAge();
console.log(person)

let obj= {};
const obj1 ={
    name: 'YYY',
    toString: function() {
        return this.name
    }
}

obj1.toString()
Object.assign(obj, obj1)