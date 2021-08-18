class Cart {
  // constructor(id, cameraName, price, imageUrl, quantity, selectedLense) {
    constructor(){
    this.items = JSON.parse(localStorage.getItem("cart"));
    // this.id = id;
    // this.cameraName = cameraName;
    // this.price = price;
    // this.imageUrl = imageUrl;
    // this.quantity = quantity;
    // this.selectedLense = selectedLense;
  }

  getItems(id) {
    console.log("id de get items : " + this.items.id);
    // console.log("nom de la camera get items : " + this.cameraname);
    return this.cameraName;
  }
  addItem(item) {
    // fonction to add an item to the cart
    new Cart();
  }

  removeItem(item) {
    // fonction to remove an item from cart

  }

  get FormatedPrice() {
    return (
      this.price / 100 +
      "," +
      (this.price % 100).toString().padStart(2, "0") +
      " €"
    );
    // => pas toFixed  on veut 2 décimales apres la virgule : padStart
    // return (this.price / 100 ).toLocaleString("EUR", {style: "currency", currency: "EUR"});
  }

  getProductValue() {
    // fonction qui calcule le montant du produit en fonction de la quantité
  }

  getTotalValue() {
    // fonction to calculate the total value of the cart
  }
}

if (localStorage.cart) {
  let products = JSON.parse(localStorage.getItem("cart"));
  console.log(products);
  let cartList = [];
  products.forEach((element) =>
    cartList.push(
      new Cart(
        element.id,
        element.cameraName,
        element.price,
        element.imageUrl,
        element.quantity,
        element.selectedLense
      )
    )
  );
} else {
  let products = [];
}
