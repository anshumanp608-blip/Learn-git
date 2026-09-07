import { LightningElement } from 'lwc';

export default class CheckEligiblity extends LightningElement { 

    age = '';
    message = '';

    handleChange(event){
        this.age = Number(event.target.value);
    }
        checkEligiblity() {
        if (this.age >= 18) {
            this.message = 'Eligible for Voting';
        } else {
            this.message = 'Not Eligible for Voting';
        }
    }
    }
