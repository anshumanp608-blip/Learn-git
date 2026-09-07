import { LightningElement,api } from 'lwc';

export default class EmployeeChild extends LightningElement {
    
    @api name;
    @api department;
    @api salary;
    @api experience;
    @api msg;
}