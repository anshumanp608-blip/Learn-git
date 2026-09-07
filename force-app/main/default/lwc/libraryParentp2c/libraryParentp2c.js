import { LightningElement } from 'lwc';

export default class LibraryParentp2c extends LightningElement {

    id = '';
    name = '';
    author =  '';
    status = '';

   

    books = [{
        id : 101,
        name : 'Wings of Valour',
        author : 'Swapnil Pandey',
        status : 'Issued'
    },
       { id : 302,
        name : 'Das Paise ka Postcard',
        author : 'Capt. S.N. Ahmed',
        status : 'Available'
    },

       { id : 203,
        name : 'Believer’s Dilemma',
        author : 'Abhishek Choudhary',
        status : 'Issued'
        
    }]

    
        get size() {
        return this.books.length;
    }
    
}