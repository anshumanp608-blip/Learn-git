import { LightningElement } from 'lwc';

export default class Changeuppercase extends LightningElement {
    str = '';
    final = '';

    handleChange(event) {
        this.str = event.target.value;
    }

    changecase(event){
        this.final = this.str.toUpperCase();
    }
}