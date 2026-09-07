import { LightningElement,api } from 'lwc';

export default class LoanEligChild extends LightningElement {

    Eligibility = '';
    @api checkelig;

    handlelig(){
        
        if(this.checkelig.MonthlyIncome > '20000' && this.checkelig.Amount < 200000){
            this.Eligibility = 'Eligibility Status' + 'Eligible';
        }
        else if(this.checkelig.MonthlyIncome > '50000' && this.checkelig.Amount < 500000){
            this.Eligibility = 'Eligibility Status' + 'Eligible';
        }
        else{
            this.Eligibility = 'Eligibility Status' + ' Not Eligible';
        }
    }
}