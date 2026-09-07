import { LightningElement } from 'lwc';

export default class EmployeeParent extends LightningElement {
    name = '';
    department ='';
    salary = '';
    experience = '';

    n = '';
    d = '';
    s = '';
    e = '';
    msg = '';

    handleNameChange(event){
        this.name = event.target.value;
    }
    handleDepartmentChange(event){
        this.department = event.target.value;
    }
    handleSalaryChange(event){
        this.salary = event.target.value;
    }
    handleExperienceChange(event){
          this.experience = Number(event.target.value);
    }

    onclickhanle(){
        this.n = this.name;
        this.d = this.department;
        this.s = this.salary;
        this.e = this.experience;

        if(this.e > 2){
            this.msg = 'Senior Employee';

        }
        else{
            this.msg = 'Less than 2 year of Experience'
        }
        
    }

}