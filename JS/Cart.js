class Cart {
//   constructor(id, cameraName, price, imageUrl, quantity, selectedLense) {
    constructor(){
    this.items = JSON.parse(localStorage.getItem("cart"));
    // this.id = id;
    // this.cameraName = cameraName;
    // this.price = price;
    // this.imageUrl = imageUrl;
    // this.quantity = quantity;
    // this.selectedLense = selectedLense;
  }

  getItems() {
    // console.log("id de get items : "+ this.id);
    // console.log("nom de la camera get items : " + this.cameraname);
    console.log(this.items.id)
    return this.items;
  }
  addItem(item) {
    // fonction to add an item to the cart
    const cart = new Cart();

  }

  removeItem(item) {
    // fonction to remove an item from cart
  }

  getProductValue() {
    // fonction qui calcule le montant du produit en fonction de la quantité
  }

  getTotalValue() {
    // fonction to calculate the total value of the cart
  }
}

if(localStorage.cart){
    let products = JSON.parse(localStorage.getItem("cart"));
    console.log(products);
    products.forEach(element => new Cart(
        element.id,
        element.cameraName,
        element.price,
        element.imageUrl,
        element.quantity,
        element.selectedLense
      ))
}else{
    let products = [];
}
