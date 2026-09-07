import { LightningElement } from 'lwc';

export default class ParentLifecycle extends LightningElement {

    parentName = 'Anshuman';

    constructor() {
        super();
        console.log('Parent Constructor');
    }

    connectedCallback() {
        console.log('Parent ConnectedCallback');
    }

    renderedCallback() {
        console.log('Parent RenderedCallback');
    }

    handleChange(event) {
        this.parentName = event.target.value;
    }
}