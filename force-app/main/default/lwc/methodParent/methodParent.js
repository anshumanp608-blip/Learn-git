import { LightningElement } from 'lwc';

export default class MethodParent extends LightningElement {
    msg = '';
    m = '';

    chHandler(eve) {
        this.m = eve.target.value;
        
    }

    clHandler() {
        // msg needs to send to child component
        this.msg = this.m;
    }
}