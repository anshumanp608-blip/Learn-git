import { api, LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import accRating from '@salesforce/schema/Account.Rating';

export default class LdsComponent extends LightningElement {
    @api recordId;
    @api objectApiName;
    fields = ['Name', accRating, 'Phone', 'Industry'];

    formHandler() {
        const evt = new ShowToastEvent({
            title: 'Record created',
            message: 'Record Has Been Created Successfully..!!',
            variant: 'success',//error,warning,info
        });
        this.dispatchEvent(evt);
        const fArr = this.template.querySelectorAll('lightning-input-field');
        if (fArr) {
            fArr.forEach(field => {
                field.reset();//its a predefined method to empty the value of text box
            })
        }
    }
}