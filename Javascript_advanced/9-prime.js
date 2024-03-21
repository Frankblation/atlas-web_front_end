function countPrimeNumbers() {
    const start = performance.now();
    let count = 0;

    for (let num = 2; num <= 100; num++) {
        let isPrime = true;
\
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            count++;
        }
    }

    const end = performance.now();
    const executionTime = end - start;
    console.log(`Execution time of printing countPrimeNumbers was ${executionTime.toFixed(16)} milliseconds.`);
    return count;
}

countPrimeNumbers();
