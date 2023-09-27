function exponent(base: number, exponent: number) {
    if (typeof(base) === 'number' && typeof(exponent) === 'number') {
        return base ** exponent
    } else {
        console.error('Base and exponent must be numbers.')
    }
}

module.exports = exponent