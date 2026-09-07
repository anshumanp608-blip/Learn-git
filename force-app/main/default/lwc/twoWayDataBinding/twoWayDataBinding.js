import { LightningElement } from 'lwc';

export default class TwoWayDataBinding extends LightningElement {

    data = 'This value is from js to html';

    name ='';
    output = '';
    change(event){
        this.name = event.target.value;
    }
    visible(){
        this.output = this.name;
    }
}