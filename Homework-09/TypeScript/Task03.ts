export class ObjectManipulator {

    constructor(protected obj: any) {}

    public set(key:string, value:string | number | boolean) {
        return new ObjectManipulator({...this.obj, [key]: value});
    }

    public get(key: string) {
        return this.obj[key];
    }

    public delete(key: string) {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject() {
        return this.obj;
    }
}

let user = {
    name: "Ivan",
    lastName: "Shym",
    age: 26
}



let newUser = new ObjectManipulator(user)

newUser = newUser.set('isMarried', true)
newUser = newUser.set('salary', 10000)

console.log(newUser)

// console.log(newUser.get("name"))
//
// newUser.delete("age")
//
// console.log(newUser.delete("age"))
//
// newUser.getObject()
//
// console.log(newUser.getObject())

