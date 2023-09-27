// import { soma } from './library/soma/soma.js'

const myMathLib = require('./library/MyMathLib')

// console.log(myMathLib.soma([2, 3]))
// console.log(soma([5, 4, 3, 2, 1]))

// console.log(myMathLib)


// console.log(myMathLib.sum(3, 4))
// console.log(myMathLib.subtraction(3, 4))
// console.log(myMathLib.division(3, 4))
// console.log(myMathLib.multiplication(3, 4))

// const f = myMathLib.factorial
// let prog = myMathLib.combinatorial(30, 4, true, false)
// console.log(prog)


let a = new myMathLib.ArithmeticProgression(2, 17, 30)
console.log(a.progression)