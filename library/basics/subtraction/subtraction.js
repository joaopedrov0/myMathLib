function subtraction(firstNumber, secondNumber) {
    if (typeof (firstNumber) !== 'number' || typeof (secondNumber) !== 'number') {
        console.error('Both arguments in subtraction function must be numbers.');
    } else {
        return firstNumber - secondNumber;
    }
    
}
module.exports = subtraction;
