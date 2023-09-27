function division(firstNumber: number, secondNumber: number) {
    if (typeof (firstNumber) !== 'number' || typeof (secondNumber) !== 'number') {
        console.error('Both arguments in division function must be numbers.');
    } else {
        return firstNumber / secondNumber;
    }
}