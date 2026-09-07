import { LightningElement, wire } from 'lwc';
import ca from '@salesforce/apex/controllerapex.method';
import{NavigationMixin} from 'lightning/navigation';
export default class WireToDisplayData extends NavigationMixin(LightningElement) {

    @wire(ca)
    cadata;

    handlenew(){
        this[NavigationMixin.Navigate](
            {
                type: 'standard__objectPage',
                attributes:{
                objectApiName : 'Case',
                actionName : 'new'
                }
            }
        );
    }

    casid;
    
    handleView(event){
        this.casid =  event.target.name;

        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes:{
                objectApiName : 'Case',
                recordId : this.casid,
                actionName : 'view',
            }
        });
    }

    

}