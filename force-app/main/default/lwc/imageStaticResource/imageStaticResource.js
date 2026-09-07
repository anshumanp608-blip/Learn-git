import { LightningElement } from 'lwc';

import im from '@salesforce/resourceUrl/shopping';
import rs from '@salesforce/resourceUrl/importdata';

export default class ImageStaticResource extends LightningElement {

    img = im;
    rss = rs + '/resource/restaurant.jpg';
    
}