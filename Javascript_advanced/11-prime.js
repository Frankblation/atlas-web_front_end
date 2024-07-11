function countPrimeNumbers() {
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    let count = 0;
    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) count++;
    }
    return count;
}

// Measure execution time for 100 calls with setTimeout
let startTime = performance.now();
function countPrimeNumbers100() {
    for (let i = 0; i < 100; i++) {
        countPrimeNumbers();
    }
  
}

const to = performance.now();
setTimeout(countPrimeNumbers100,0); 
let endTime = performance.now();
    console.log(`Execution time of calculating prime numbers 100 times was ${endTime - startTime} milliseconds.`);