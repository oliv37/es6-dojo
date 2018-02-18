/* TODO : à compléter pour faire passer les tests */

// TODO : à enlever
export default class Rectangle {

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }

    static sayHello(name) {
        return `hello ${name}`;
    }
}