import { LightningElement, api } from 'lwc';

export default class ChildLifecycle extends LightningElement {

    @api childName;

    constructor() {
        super();
        console.log('Child Constructor');
    }

    connectedCallback() {
        console.log('Child ConnectedCallback');
    }

    renderedCallback() {
        console.log('Child RenderedCallback');
    }
}