import { LightningElement,wire } from 'lwc';
import acc from '@salesforce/apex/controllerapex.accmethod'
import{NavigationMixin} from 'lightning/navigation';
import acount from '@salesforce/apex/controllerapex.delaccount';
import { refreshApex } from '@salesforce/apex';  

export default class Wireaccount extends NavigationMixin(LightningElement) {

    @wire(acc) acdata;

    handnew(){
        this[NavigationMixin.Navigate](
            {
                type: 'standard__objectPage',
                attributes:{
                    objectApiName:'Account',
                    actionName:'new',
                }
            });
    }

    acid;
    handview(event){
        this.acid = event.target.name;

        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes:{
                objectApiName: 'Account',
                recordId: this.acid,
                actionName: 'view'
            }
        });
    }

    handedit(event){
        this.acid = event.target.name;
        
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes:{
                objectApiName:'Account',
                recordId: this.acid,
                actionName:'edit'
            }
        });
    }

        handledel(event){
            this.acid = event.target.name;
            acount({aid:this.acid})
            .then(res=>{
                alert(res);
                return refreshApex(this.acdata);
            })
            .catch(e=>{
                alert(e.body.message);
            })
        }
    
        

    
}