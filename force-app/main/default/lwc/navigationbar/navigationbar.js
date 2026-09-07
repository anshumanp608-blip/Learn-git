import { LightningElement } from 'lwc';
import{NavigationMixin} from 'lightning/navigation';
export default class Navigationbar extends NavigationMixin(LightningElement) {

    home(){
        this[NavigationMixin.Navigate]({
            type : 'standard__app',
            attributes:{
                appTarget : 'c__vsapp' 
            }
        });  }
     record() {
    this[NavigationMixin.Navigate]({
        type: 'standard__recordPage',
        attributes: {
            recordId: 'a0Pg5000000J2e1EAC',
            objectApiName: 'Customer_detals__c',
            actionName: 'view'
        }
    });  }
newrec() {
    this[NavigationMixin.Navigate]({
        type: 'standard__objectPage',
        attributes: {
            objectApiName: 'Customer_detals__c',
            actionName: 'new'
        } });
}

}