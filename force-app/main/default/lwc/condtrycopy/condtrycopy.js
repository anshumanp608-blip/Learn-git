import { LightningElement } from 'lwc';

export default class CalculatorConditional extends LightningElement {

    num1 = 0;
    num2 = 0;
    result = '';
    showResult = false;

    btnMsg = 'Show Result';
    stl = 'background-color: lightyellow; color: black; padding:10px';

    handleNum1(event) {
        this.num1 = Number(event.target.value);
    }
 // Hello made changes gg 
    handleNum2(event) {
        this.num2 = Number(event.target.value);
    }

    add() {
        this.result = 'Result : ' + (this.num1 + this.num2);
    }

    toggleResult() {
        if (this.showResult) {
            this.showResult = false;
            this.btnMsg = 'Show Result';
            this.stl = 'background-color: lightyellow; color: black; padding:10px';
        } else {
            this.showResult = true;
            this.btnMsg = 'Hide Result';
            this.stl = 'background-color: lightblue; color: darkblue; padding:10px';
        }
    }
}