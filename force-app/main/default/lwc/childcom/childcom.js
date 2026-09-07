import { LightningElement } from 'lwc';

export default class Child extends LightningElement {
    send() {
        this.dispatchEvent(
            new CustomEvent('message', {
                detail: 'Hello Parent'
            })
        );
    }
}