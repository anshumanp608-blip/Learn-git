import { LightningElement } from 'lwc';

export default class LoopComponent extends LightningElement {
    students =[
        {
            id: 101,
            name: 'Anshuman',
            email: 'anshuman@gmail.com'
        },
        {
            id: 102,
            name: 'Divyanshu',
            email: 'divyanshu@gmail.com'
        },
        {
            id: 103,
            name: 'sourabh',
            email: 'sourabh@gmail.com'
        },
        {
            id: 104,
            name: 'abhishek',
            email: 'abhishek@gmail.com'
        }
    ];
}