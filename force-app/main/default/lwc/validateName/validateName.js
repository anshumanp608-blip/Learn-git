import { LightningElement } from 'lwc';

export default class ValidateName extends LightningElement {

    str = '';
    msg = '';

      handleInput(event) {
        this.str = event.target.value;
    }
    
    handleChange(event) {
        if(this.str.length > 3) {
            this.msg = this.str + ' ' + 'Welcome to LWC';
        }
        else{
            this.msg = 'Enter Valid Name';
        }
}
/*selectedCity = '';

    cityOptions = [
        { label: 'Delhi', value: 'Delhi' },
        { label: 'Mumbai', value: 'Mumbai' },
        { label: 'Shimla', value: 'Shimla' }
    ];

    handleChange(event) {
        this.selectedCity = event.target.value;
    } */
}