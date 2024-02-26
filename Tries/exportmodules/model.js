const car = require('./car')
const {add, minus} = require('./build')
const envs = require('./envs.json')

car.create()

add()
minus()


console.log(envs.dev.uk)

