import { LightningElement , wire} from 'lwc';
import search from '@salesforce/apex/controllerapex.searchmethod';
import { refreshApex } from '@salesforce/apex';
export default class WireAccountSearch extends LightningElement {

    @wire(search,{ n: '$name' }) srch;

    name = '';
    handseach(event){
        this.name = event.target.value;
        
    }
    

}