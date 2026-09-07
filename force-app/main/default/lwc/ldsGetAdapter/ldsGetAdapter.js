import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import cdpt from '@salesforce/schema/Contact.Department';

const FIELDS = [
    'Contact.Name',
    'Contact.Phone',
    cdpt,
    'Contact.Account.Type',
    'Contact.Account.Industry'
];

export default class LdsGetAdapter extends LightningElement {
    @api recordId;

    contactName;
    contactPhone;
    contactDepartment;
    accountType;
    accountIndustry;

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    wiredRecord({ data, error }) {
        if (data) {
            this.contactName = data.fields.Name.value;
            this.contactPhone = data.fields.Phone.value;
            this.contactDepartment = data.fields.Department.value;
            this.accountType = data.fields.Account.value.fields.Type.value;
            this.accountIndustry = data.fields.Account.value.fields.Industry.value;
        } else if (error) {
            alert(error);
        }
    }
}