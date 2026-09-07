import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {
    msg = '';

    receive(event) {
        this.msg = event.detail;
    }
}