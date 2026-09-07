import { LightningElement, wire } from 'lwc';
import so from '@salesforce/apex/searchcontactquestionclass.searchc';

export default class ContactSearchQuestion extends LightningElement {

    name = '';

    @wire(so, { n: '$name' }) 
    s;

    handlechange(event) {
        this.name = event.target.value;
    }
}