import { LightningElement } from 'lwc';

export default class ChangeBackground extends LightningElement {

    isBlue = true;
    bgStyle = '';

    changeColor() {
        if(this.isBlue) {
            this.bgStyle = 'background-color: lightgreen; padding:20px;';
        } else {
            this.bgStyle = 'background-color: lightblue; padding:20px;';
        }

        this.isBlue = !this.isBlue;
    }
}