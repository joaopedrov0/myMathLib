function combinatorial(quantity: number, sample: number, orderMatters: boolean, sampleLessThanTotal: boolean) {
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
    let order = orderMatters ? 1 : 0
    let sampleLimited = sampleLessThanTotal ? 1 : 0

    let temp

    if(!orderMatters && !sampleLessThanTotal) {
        return factorial(quantity)
    } else {
        temp = factorial(quantity) / ( (factorial(sample) * order) * (factorial(quantity - sample) * sampleLimited) )
        return temp
    }
}

module.exports = combinatorial
