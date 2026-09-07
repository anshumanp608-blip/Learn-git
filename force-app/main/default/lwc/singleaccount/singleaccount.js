import { LightningElement, api, wire } from 'lwc';
import singleAcc from '@salesforce/apex/singleclass.singleacc';

export default class Singleaccount extends LightningElement {

    @api recordId;

    na;
    ind;
    ph;
    ra;
    ar;
    error;

    @wire(singleAcc, { acid: '$recordId' })
    myAccData({ data, error }) {
        if (data) {
            this.na = data.Name;
            this.ind = data.Industry;
            this.ph = data.Phone;
            this.ra = data.Rating;
            this.ar = data.AnnualRevenue;

            console.log(data);
        } else if (error) {
            this.error = error;
            alert(error);
        }
    }
}