import { LightningElement, wire } from 'lwc';
import cons from '@salesforce/apex/contactLwc.getRelContact';
export default class WireTableContactCompoent extends LightningElement {
    rr = [
        { label: 'view', name: 'v' },
        { label: 'edit', name: 'e' },
        { label: 'delete', name: 'd' }
    ];

    colum = [
        {
            label: 'Contact First Name', fieldName: 'fUrl', type: 'url',
            typeAttributes: {
                label: { fieldName: 'FirstName' }, target: '_self'
            }
        },
        { label: 'Contact last Name', fieldName: 'LastName' },
        { label: 'Contact Email', fieldName: 'Email' },
        { label: 'Contact Phone', fieldName: 'Phone' },
        {
            label: 'Account Name', fieldName: 'aUrl', type: 'url',
            typeAttributes: {
                label: { fieldName: 'accVa' }, target: '_self'
            }
        },
        {
            type: 'action',
            typeAttributes: { rowActions: this.rr }
        }

    ];

    
    cc;
    @wire(cons, { 'nn': '$acName' }) //$=>makes it reactive
    contactData({ data, error }) {
        if (data) {
            var md = JSON.parse(JSON.stringify(data));
            md.forEach(res => {
                res.fUrl = '/' + res.Id;
                res.accVa = res.AccountId != undefined ? res.Account.Name : ' ';
                res.aUrl = res.AccountId != undefined ? '/' + res.AccountId : ' ';
            });
            this.cc = md;
        }
        else if (error) {
            alert(error);
        }
    }

    acName = '';
    changeHandler(event) {
        this.acName = event.target.value;
    }

    rowHandler() {
        alert('action performed..!!');
    }
}