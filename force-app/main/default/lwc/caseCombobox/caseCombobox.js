import { LightningElement, wire } from 'lwc';
import ac from '@salesforce/apex/caseComp.accountmethod';
import ca from '@salesforce/apex/caseComp.casemethod';

export default class CaseCombobox extends LightningElement {

    pri = '';
    ori = '';
    sta = '';
    sub = '';
    accountId = '';

    acList = [];

    @wire(ac)
    wiredAccounts({ data, error }) {

        if (data) {

            this.acList = data.map(acc => ({
                label: acc.Name,
                value: acc.Id
            }));

        } else if (error) {
            alert(error);
        }
    }

    getPriority(event) {
        this.pri = event.target.value;
    }

    getOrigin(event) {
        this.ori = event.target.value;
    }

    getStatus(event) {
        this.sta = event.target.value;
    }

    getSubject(event) {
        this.sub = event.target.value;
    }

    getAccount(event) {
        this.accountId = event.detail.value;
    }

    saveCase() {

        ca({
            sta: this.sta,
            pri: this.pri,
            ori: this.ori,
            sub: this.sub
        })
        .then(result => {
            alert(result);
        })
        .catch(error => {
            alert(error.body.message);
        });

    }
}