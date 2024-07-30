// Time Spent: ~20min
// This sum to n have a time O(n) time complexity and have a medium efficiency
function sum_to_n_a(n: number) {
    let sum = 0
    for (let i = 1; i < n+1; i++) {
        sum += i
    }
    return sum
}

// This sum to n have a time O(1) time complexity and i think have a best efficiency
function sum_to_n_b(n: number) {
    return n * (n + 1) / 2
}

// This function is almost same as first one just i can't imagine this third way... 
function sum_to_n_c(n: number) {
    const arr = Array.from({ length: n }, (_, i) => i + 1)
    return arr.reduce((a, b) => a + b)
}

console.log('A -', sum_to_n_a(5)) // 15
console.log('B -', sum_to_n_b(5)) // 15
console.log('C -', sum_to_n_c(5)) // 15