function exponent(base, exponent) {
    if (typeof (base) === 'number' && typeof (exponent) === 'number') {
        return Math.pow(base, exponent);
    }
    else {
        console.error('Base and exponent must be numbers.');
    }
}
module.exports = exponent;
