
    /**
     * 2 arguments passed: returns a new array
     * which is a result of input being mapped using
     * the specified mapper.
     *
     * 1 argument passed: returns a function which accepts
     * an input and returns a new array which is a result
     * of input being mapped using original mapper.
     *
     * 0 arguments passed: returns itself.
     *
     * @param {Function} mapper
     * @param {Array} input
     * @return {Array | Function}
     */
    export function map(mapper:any, input: number[]) {
    if (arguments.length === 0) {
        return map;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput:number[]) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.map(mapper);
        };
    }
    return input.map(mapper);
}
let firstArra = [1, 4, 9,16]

    function isSqrt(value :number):number {
        return Math.sqrt(value);
    }
console.log(map(isSqrt, firstArra))

/**
 * 2 arguments passed: returns a new array
 * which is a result of input being filtered using
 * the specified filter function.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being filtered using original filter
 * function.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} filterer
 * @param {Array} input
 * @return {Array | Function}
 */
export function filter(filterer: any, input: number[]) {
    if (arguments.length === 0) {
        return filter;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput:number[]) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.filter(filterer);
        };
    }
    return input.filter(filterer);
}

    function isBigEnough(value :number) {
        return value >= 10;
    }
    let array = [10, 20, 3,5]
    console.log(filter(isBigEnough, array))


/**
 * 2 arguments passed: returns sum of a and b.
 *
 * 1 argument passed: returns a function which expects
 * b and returns sum of a and b.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number | Function}
 */
export function add(a: number, b:number) {
    if (arguments.length === 0) {
        return add;
    }
    if (arguments.length === 1) {
        return function subFunction(subB:number) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return a + subB;
        };
    }
    return a + b;
}


console.log(add(2,60))


