import { LightningElement } from 'lwc';

export default class ShoppingParent extends LightningElement {

    product = '';
    quantity = '';
    price = '';
    result = '';
    total = '';
    msg = '';
    disc = '';
    selectedProduct = '';

    pr = '';
    q = '';


    productOptions = [
        { label: 'Coca Cola', value: 'Coca Cola' },
        { label: 'Biscuit', value: 'Biscuit' },
        { label: 'Cake', value: 'Cake' },
        { label: 'Dorito', value: 'Dorito' }
    ];

    handleproductoptions(event) {
        this.product = event.detail.value;
    }

    handquant(eve){
        this.quantity = Number(eve.target.value);
    }

    handprice(eve){
        this.price = Number(eve.target.value);
    }

    handtotal(){
        this.pr = this.price;
        this.q = this.quantity;
        this.selectedProduct = this.product;
        
        this.total = this.quantity * this.price;

        if (this.total > 500) {
            this.disc = this.total * 10 / 100

            this.result =  (this.total - this.disc);

            this.msg = ('Discount applied to You Worth : ') + (this.disc);
        } else {
            this.result = this.total;
        }
    }
}