export function add(...numbers) {
    return numbers.reduce(function(acc, currentValue) {
        return acc + currentValue;
    }, 0);
}

/*
export function add(a, b, c) {
    return a + b + c;
}
*/

export function substract(a, b) {
    return a - b;
}

function greeting() {
    return `Hello from math.js`;
}

export default greeting;
