import { LightningElement } from 'lwc';

export default class SwitchthemeParentp2c extends LightningElement {

    bgcolor = 'background-color: white;';
    bol = true;

    switchTheme() {
        if (this.bol) {
            this.bgcolor = 'background-color: aqua;';
        } else {
            this.bgcolor = 'background-color: black;';
        }

        this.bol = !this.bol;
    }
}