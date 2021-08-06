class Cart {
    constructor() {
    this.items = JSON.parse(localstorage.get('cart'))
    }
    
    getItems() {
        console.log(this.items);
        return this.items
    
    }
    addItem(item) {
    // fonction to add an item to the cart

    }
    
    removeItem(item) {
    // fonction to remove an item from cart
    }
    
    getProductValue(){
    // fonction qui calcule le montant du produit en fonction de la quantité

    }

    getTotalValue() {
    // fonction to calculate the total value of the cart
    }

}

    