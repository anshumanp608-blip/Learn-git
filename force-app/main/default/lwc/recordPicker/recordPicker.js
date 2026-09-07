import { LightningElement } from 'lwc';

export default class RecordPickerComponent extends LightningElement {
    displayInfo={primaryField:'Name',additionalFields:['Account.Name']};

    msg;
    handleChange(event){

        this.msg = event.detail.recordId;
        alert(this.msg+'====');
    }
}