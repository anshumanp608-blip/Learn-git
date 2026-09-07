import { LightningElement } from 'lwc';

export default class Mcall extends LightningElement {

    str = '';
    count = '';
    uppertxt = '';
    
    handleChange(event){
        this.str = event.target.value;
    }

    countmethod(){
        this.uppertxt = this.str.toUpperCase();
        this.count = 'total count is : ' + this.str.length;
}
}