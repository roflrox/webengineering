function identity_function(param) {
    return function () {
        return param
    }
}


function addf(x) {
    return function (y) {
        return x + y;
    }
}

function applyf(x) {
    return x
}


function curry(x, y) {
    return x(y)
}

function mul1(x) {
    return function (y) {
        return y * x;
    }
}

function add1(x) {
    return function (y) {
        return x + y
    }
}

function inc(x) {

    return applyf(curry(add1, 1))(x);
}

function methodize(f) {
    return function (...x) {
        return f(this, ...x);
    }
}

function add(x, y) {
    return x + y
}

function demethodize(f) {
    return function (a, b) {
        return f.call(a, b);
    }
}


const fun = identity_function(1);

console.log(fun())


console.log(addf(2)(3))

console.log(applyf(mul1)(5)(6))
console.log(applyf(addf)(5)(6))

console.log(inc(1))


add3 = curry(add1, 3)
console.log(add3(4))

console.log(curry(mul1, 5)(6));


Number.prototype.add = methodize(add)
console.log((3).add(4))


console.log(demethodize(Number.prototype.add)(5, 6));

function mul(x, y) {
    return x * y;
}

function twice(f) {
    return function (a) {
        return f(a, a);
    }
}

square = twice(mul)
double = twice(add);
console.log(square(3))

console.log(composeu(double, square)(3)) // 36


function composeu(funca, funcb) {
    return function (a) {
        return funcb(funca(a));
    }
}

console.log( composeb(add, mul)(3,2,5)) //25

function composeb(funca, funcb){
    return function(x, y, z){
        return funcb(funca(x,y), z);
    }
}

function once(f){

        var executed = false;
        return function() {
            if (!executed) {
                executed = true;
                return f.apply(this, arguments);
            }
            throw new Error("Not allowed")
        }
}

var once_add = once(add);
x = once_add(3,4)
//x = once_add(3,4)


counter = counterf(10);
console.log(counter.inc()) // 11
console.log(counter.dec()) // 10

function counterf(a){
    return {
        inc: function(){
            a += 1;
            return a;
        },
        dec: function(){
            a -= 1;
            return a;
        }
    }
}


counter = counterf(10);


function revocable(x) {
    return{
        func:x,
        invoke: function (...args){
            this.func(...args)
        },
        revoke: function (){
            this.func = null
        }

    }
}

temp = revocable(console.log);
temp.invoke("lulu");
//temp.revoke();
//temp.invoke(8); // Fehlerabbruch!


function wrapper() {
    var array = [];

    return {
        get: function get(i) {
            return array[i];
        },
        store: function store(i, v) {
            array[i] = v;
        },
        append: function append(v) {
            array.push(v);
        }
    };
}

arr = wrapper()
arr.append("123")
temp.invoke(arr.get(0))