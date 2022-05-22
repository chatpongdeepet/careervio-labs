// rectangle area calculator
let rectangle = (a, b) => a * b
console.log(rectangle(5,5))

// prime number
let primeNumber = (n) => {
    if (n < 2)
    return `${n} is not a prime`

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return `${n} is not a prime number`
        }
    }
    return `${n} is a prime number`
}
console.log(primeNumber(1))