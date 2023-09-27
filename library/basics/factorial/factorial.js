function factorial(value) {
    if (typeof (value) === 'number') {
        var temp = 1;
        for (var i = 0; i < value; i++) {
            temp = temp * (value - i);
        }
        return temp;
    }
    else {
        console.error('The argument of fatorial function must be a number');
    }
}
module.exports = factorial;