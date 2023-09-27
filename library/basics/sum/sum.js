function sum(numbers, secondNumber) {

    if (typeof (numbers) === 'object' && secondNumber && typeof (secondNumber) === 'number') {
        return console.error("The sum function will only sum the array values, or two number values, never both.");
    }

    if (typeof (numbers) !== 'number' && typeof (numbers) !== 'object') {
        return console.error("The first argument would must be a number or an array, but it's type is " + typeof (numbers));
    }

    else if (secondNumber && typeof (secondNumber) !== 'number') {
        return console.error("The second argument must necessarily be a number, but it's type is " + typeof (secondNumber));
    }

    else if (typeof (numbers) === 'object') {
        var temp = 0;
        var pos;
        for (pos in numbers) {
            temp += numbers[pos];
        }
        return temp;
    }
    
    else if (typeof (numbers) === 'number' && secondNumber && typeof (secondNumber) === 'number') {
        return numbers + secondNumber;
    }
}
module.exports = sum;
