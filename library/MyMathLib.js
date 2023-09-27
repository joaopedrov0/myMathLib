"use strict";
// import { soma } from './soma/soma.js'


// Basic operators
const sum = require('./basics/sum/sum.js')
const multiply = require('./basics/multiplication/multiplication.js')
const subtraction = require('./basics/subtraction/subtraction.js')
const division = require('./basics/division/division.js')
const exponent = require('./basics/exponentiation/exponentiation.js')
const factorial = require('./basics/factorial/factorial.js')

//Progressions
const { ArithmeticProgression } = require('./progressions/arithmetic/arithmetic.js')
const { GeometricProgression } = require('./progressions/geometric/geometric.js')

//Probability
    //Combinatorial
    const combinatorial = require('./probability/combinatorial/combinatorial.js')

const myMathLib = { 
    //Basics
    sum, 
    multiply, 
    subtraction, 
    division, 
    exponent,
    factorial,
    //Progressions
    ArithmeticProgression, 
    GeometricProgression,
    //Probability
        //Combinatorial
        combinatorial,
}

module.exports = myMathLib