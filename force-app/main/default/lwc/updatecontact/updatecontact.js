import { LightningElement,wire } from 'lwc';
import cx from '@salesforce/apex/searchContacts.updateac'
export default class Updatecontact extends LightningElement {

    @wire(cx) c;
}