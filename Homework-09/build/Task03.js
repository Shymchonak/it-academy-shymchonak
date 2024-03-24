"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectManipulator = void 0;
class ObjectManipulator {
    constructor(obj) {
        this.obj = obj;
    }
    set(key, value) {
        return new ObjectManipulator(Object.assign(Object.assign({}, this.obj), { [key]: value }));
    }
    get(key) {
        return this.obj[key];
    }
    delete(key) {
        const newObj = Object.assign({}, this.obj);
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }
    getObject() {
        return this.obj;
    }
}
exports.ObjectManipulator = ObjectManipulator;
let user = {
    name: "Ivan",
    lastName: "Shym",
    age: 26
};
let newUser = new ObjectManipulator(user);
newUser = newUser.set('isMarried', true);
newUser = newUser.set('salary', 10000);
console.log(newUser);
// console.log(newUser.get("name"))
//
// newUser.delete("age")
//
// console.log(newUser.delete("age"))
//
// newUser.getObject()
//
// console.log(newUser.getObject())
