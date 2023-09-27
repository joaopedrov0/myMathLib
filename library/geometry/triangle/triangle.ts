class Triangle {
    constructor(a, b, c){
        a = a;
        b = b;
        c = c;
    }

    //Retornar a area do triangulo
    area = (a, b, c) => {
        // Formula de Heron
        let p = (a + b + c) / 2;
        return Math.sqrt(p * (p - a) * (p - b) * (p - c));
    }

    //Retornar os angulos do triangulo
    angles = (a, b, c) => {
        
    }
}

module.exports = Triangle