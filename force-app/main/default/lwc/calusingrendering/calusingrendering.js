import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {

    num1 = '';
    num2 = '';
    result = '';
    showResult = false;

    handleNum1(event) {
        this.num1 = Number(event.target.value);
    }

    handleNum2(event) {
        this.num2 = Number(event.target.value);
    }

    add() {
        this.result = 'Result : ' + (this.num1 + this.num2);
        this.showResult = true;
    }

    subtract() {
        this.result = 'Result : ' + (this.num1 - this.num2);
        this.showResult = true;
    }

    multiply() {
        this.result = 'Result : ' + (this.num1 * this.num2);
        this.showResult = true;
    }

    divide() {
        if (this.num2 !== 0) {
            this.result = 'Result : ' + (this.num1 / this.num2);
        } else {
            this.result = 'Result : Cannot divide by zero';
        }

        this.showResult = true;
    }
}