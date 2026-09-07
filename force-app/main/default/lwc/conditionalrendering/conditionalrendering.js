import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    
    bool = true;
    handleClick(){
        if(this.bool)
            this.bool=false;
        else{
            this.bool=true;
        }
    }
}