import { LightningElement , api} from 'lwc';

export default class Shoppingchild extends LightningElement {

    @api product = '';
    @api quantity = '';
    @api price = '';
    @api result = '';
    @api msg = '';
    @api disc = '';
    
}