function sum_to_n_a(n: number) {
    let sum = 0
    for (let i = 1; i < n+1; i++) {
        sum += i
    }
    return sum
}

function sum_to_n_b(n: number) {
    return n * (n + 1) / 2
}

function sum_to_n_c(n: number) {
}

console.log('A -', sum_to_n_a(0)) // 15
console.log('B -', sum_to_n_b(0)) // 15