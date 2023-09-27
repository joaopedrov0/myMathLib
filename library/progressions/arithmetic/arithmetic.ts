class ArithmeticProgression {
    start: number
    interval: number
    length: number
    progression: object

    constructor(start: number, interval: number, length: number) {
        this.start = start
        this.interval = interval
        this.length = length
        this.progression = this.getProgression(start, interval, length)
    }


    getProgression (start, interval, length) {
        let progression = [start]
        for (let i = 1; i < length; i++) {
            progression.push(progression[progression.length - 1] + interval)
        }
        return progression
    }
}

module.exports = { ArithmeticProgression }