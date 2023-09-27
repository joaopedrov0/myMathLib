var ArithmeticProgression = /** @class */ (function () {
    function ArithmeticProgression(start, interval, length) {
        this.start = start;
        this.interval = interval;
        this.length = length;
        this.progression = this.getProgression(start, interval, length);
    }
    ArithmeticProgression.prototype.getProgression = function (start, interval, length) {
        var progression = [start];
        for (var i = 1; i < length; i++) {
            progression.push(progression[progression.length - 1] + interval);
        }
        return progression;
    };
    return ArithmeticProgression;
}());
module.exports = { ArithmeticProgression: ArithmeticProgression };
