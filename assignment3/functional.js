function pubsub() {
    return {
        funcs: new Array(),
        subscribe: function (x) {
            this.funcs.push(x)
        },
        publish: function (msg) {
            this.funcs.forEach(x => x(msg))
        }
    }
}

mypubsub = pubsub();
mypubsub.subscribe(console.log)
mypubsub.publish("hallo");


function gensymf(input) {
    const sim = input
    let index = 0;
    return () => {
        index += 1;
        return sim + index;
    };

}

gensym = gensymf('G');
console.log(gensym()) // 'G0'
console.log(gensym())  // 'G1'
gensym() // 'G2'
gensym() // 'G3'

function fibonaccif(x, y) {
    let first = x
    let second = y
    let i = 0
    return () => {
        i++
        if (i === 1) {
            return 0
        }
        if (i === 2) {
            return 1;
        }
        this.tmp1 = first
        first = second;
        second = tmp1 + second;
        return second;
    }

}

fib = fibonaccif(0, 1)
for (let i = 0; i < 10; i++) {
    console.log(fib())
}

function addg(first) {
    function more(next) {
        if (next === undefined ) {
            return first;
        }
        first += next;
        return more;
    }
    if (first !== undefined ) {
        return more;
    }
}

console.log(addg(3)(4)(5)()) // 12
console.log(addg(1)(2)(4)(8)()) // 15)



function add(x, y) {
    return x + y
}

function applyg(func) {
    return function (first) {
        if (first === undefined ) {
            return first;
        }
        return function more(next) {
            if (next === undefined ) {
                return first;
            }
            first = func(first, next);
            return more;
        };
    };
}

console.log(applyg(add)(3)(4)(5)()) //12


function m(value, source) {
    return {
        value: value,
        source: (typeof source === 'string')
            ? source
            : String(value)
    };
}

console.log(JSON.stringify(m(1)))
console.log(JSON.stringify(m(Math.PI, "pi")))

function addm(m1, m2) {
    value = m1.value + m2.value
    source = '(' + m1.source + '+' + m2.source + ')'
    return m(value, source)
}

console.log(JSON.stringify(addm(m(3), m(4))))


function binarymf1(binary, string) {
    return function(m1, m2) {
        var value  = binary(m1.value, m2.value),
            source = '(' + m1.source + string + m2.source + ')'
        return m(value, source);
    }
}

function binarymf(binary, op) {
    return function(m1, m2) {
        if( typeof m1 === 'number' ) { m1 = m(m1) }
        if( typeof m2 === 'number' ) { m2 = m(m2) }
        return m(
            binary(m1.value, m2.value),
            '(' + m1.source + op + m2.source + ')'
        );
    }
}

addm = binarymf(add, "+");
console.log(JSON.stringify(addm(3,4)))// {"value": 7, "source": "(3+4)"}


function twice(f) {
    return function (a) {
        return f(a, a);
    }
}

function mul(x, y) {
    return x * y;
}

square = twice(mul)

function unarymf(unary, op) {
    return function(m0) {
        if( typeof m0 === 'number' ) { m0 = m(m0) }
        return m(
            unary(m0.value),
            '(' + op + " " + m0.source + ')'
        );
    }
}

squarem = unarymf(square, "square");
console.log(JSON.stringify(squarem(4))) // {"value": 16, "source": "(square 4)"}


function hyp(x,y){
    return Math.sqrt(Math.pow(x,2)+Math.pow(y,2))
}

console.log(hyp(3,4))

function exp(value) {
    if(Array.isArray(value)) {
        return value[0](
            exp(value[1]),
            exp(value[2])
        )
    } else {
        return value
    }

}

hypa = [ Math.sqrt, [ add, [mul, 3, 3], [mul, 4, 4] ] ]

console.log(exp(hypa))

function store(x) {
    variable = x
    console.log(variable)
}

var variable; store(5);// variable === 5



function identityf(x) {
    return x

}

function quatre(add, x, y, store) {
    store(add(x,y))
}

quatre( add, identityf(3), identityf(4), store )


function unaryc(func) {
    return function (x,callback){
        return callback(func(x));
    }
}

sqrtc = unaryc(Math.sqrt);
sqrtc(81,store)


function binaryc(func) {
    return function (x,y,callback){
        return callback(func(x,y));
    }
}

addc = binaryc(add)
addc(4,5,store)
mulc = binaryc(mul); mulc(2, 3, store) // variable === 6