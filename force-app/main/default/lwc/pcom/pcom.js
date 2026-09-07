import { LightningElement } from 'lwc';

export default class Pcom extends LightningElement {

      username = '';
      result = '';
    handleChange(event){
        this.username = event.target.value;
    }
    change(){
        this.result = this.username;
    }
}