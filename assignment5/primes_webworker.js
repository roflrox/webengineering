let currentNumber = 1000000n;

onmessage = function (e){
    let prime = calcPrime()
    self.postMessage(prime)
}


function calcPrime() {
    if(isPrime(currentNumber)){
        let prime = currentNumber
        currentNumber++
        return prime
    }
    currentNumber++


}

//https://stackoverflow.com/questions/57057998/javascript-generator-to-generate-prime-numbers-less-than-a-given-number/57058901
function isPrime(num) {
    for (let i = 2n; i < num; i++) {
        if (num % i === 0n) {
            return false;
        }
    }
    return true;
}
/*-------------------------------------------*/