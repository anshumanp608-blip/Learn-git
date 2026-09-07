import { LightningElement } from 'lwc';

export default class DataTable extends LightningElement {
     act=[
        {label:'View',name:'v'},
        {label:'edit',name:'e'},
        {label:'Delete',name:'d'}
    ];

    cols = [{
        label: 'Student Id',
        fieldName: 'id',
    },
    {
        label: 'Name',
        fieldName: 'name', 
    },
    {
        label: 'Email',
        fieldName: 'email',       
    },
    {
            type: 'action', typeAttributes:
            {
                rowActions:this.act
            }
        }]

    students = [
        {
            id: 101,
            name: 'Anshuman',
            email: 'anshuman@gmail.com'
        },
        {
            id: 102,
            name: 'Ankit',
            email: 'ankit@gmail.com'
        },
        {
            id: 103,
            name: 'Anjali',
            email: 'anjali@gmail.com'
        }
    ];
}