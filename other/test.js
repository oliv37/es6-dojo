(function() { // Or `(() => {`, doesn't matter in this case
    var c = 100;

    var a = {
        c: 5,
        b: {
            c: 10,
            fn: ()=> {return this.c;}
        }
    }
    console.log(a.b.fn());// still 100, why not 5?
})();

if(true) {
    const b = 3;
    var a = 4;
}

// console.log(b); error
console.log(a);

function t(...args) { console.log(args)}
t();

const add = (a, b) => a + b;
const add2 = add.bind(null, 2);

console.log(add2(4));