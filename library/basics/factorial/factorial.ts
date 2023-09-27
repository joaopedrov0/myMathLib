function factorial(value: number){
    if (typeof(value) === 'number') {
        let temp = 1
        for(let i = 0; i < value; i++){
            temp = temp * (value - i)
        }
        return temp
    } else {
        console.error('The argument of fatorial function must be a number')
    }
}

module.exports = factorial