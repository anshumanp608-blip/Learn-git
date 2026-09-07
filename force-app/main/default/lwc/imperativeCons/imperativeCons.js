import { LightningElement,wire } from 'lwc';
import cc from '@salesforce/apex/searchContacts.consearch';
import cd from '@salesforce/apex/searchContacts.condel';
import { refreshApex } from '@salesforce/apex';  
import cx from '@salesforce/apex/searchContacts.updateac'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ImperativeCons extends LightningElement {

    @wire(cc) c;
    s;

    coId;
    handledit(event){
        this.coId = event.target.name;

    }

    handledel(event){
        this.coId = event.target.name;
        console.log('Contact Id:', this.coId);
       cd({ n: this.coId })
            .then(res=>{
               
            alert(res);

                return refreshApex(this.c);
            } )
            .catch(ee=>{
                alert(ee.body.message);
            })
        }

        handleupdate(event) {
    this.coId = event.target.name;
    console.log('Contact Id:', this.coId);

    cx({ np: this.coId })
        .then(res => {

            const toast = new ShowToastEvent({
                title: 'Contact Source Updated',
                message: res,
                variant: 'success',
                mode: 'pester'
            });

            this.dispatchEvent(toast);

            return refreshApex(this.c);
        })
        .catch(error => {
            const toast = new ShowToastEvent({
                title: 'Contact Source Updated',
                message: res,
                variant: 'warning',
                mode: 'pester'
            });
            //alert(error.body.message);
        });
}
    }


