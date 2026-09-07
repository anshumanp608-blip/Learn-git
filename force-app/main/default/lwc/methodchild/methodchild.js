import { api, LightningElement } from 'lwc';

export default class MethodChildComponent extends LightningElement {
    mm;
 
    @api ccc;
    @api getData(myVal){
        this.mm = myVal.toUpperCase();
    }
}