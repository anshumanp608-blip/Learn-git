import { LightningElement } from 'lwc';

export default class TrackLWC extends LightningElement {

     msg='ferry';
     student=['ankita','nitika','neel','saurabh'];
    chng(eve){
        this.msg = eve.target.value;
        this.student[2]=this.msg;
    }
}