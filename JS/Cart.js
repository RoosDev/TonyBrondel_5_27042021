class Cart {
  constructor() {
    this.items = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(this.items)
  }

  getItems() {
    return this.Items;
  }

  addItem(item) {
    // fonction to add an item to the cart
  }

  deleteItem(item) {
    // fonction to remove an item from cart

    let deleteButton = document.querySelector('#deleteProduct'+item);
    console.log("mon index i N°1 : " + item);

    deleteButton.addEventListener("click", function () {

      console.log("mon index i N°2 : " + item);

      this.Items.unset(item);
      let cart = new Cart();

      localStorage.setItem("cart", JSON.stringify(cart));
      document.location.reload();
    })
  }

  get formatedPrice() {
    // return (
    //   this.price / 100 +
    //   "," +
    //   (this.price % 100).toString().padStart(2, "0") +
    //   " €"
    // );
    // => pas toFixed  on veut 2 décimales apres la virgule : padStart
    return (this.price / 100).toLocaleString("EUR", {
      style: "currency",
      currency: "EUR",
    });
  }

  getformatedPriceWithQuantity(item) {
    return ((Number(item.price) * item.quantity)/100).toLocaleString("EUR", {
      style: "currency",
      currency: "EUR",
    });
  }

  getProductValue() {
    // fonction qui calcule le montant du produit en fonction de la quantité
  }

  getTotalValue() {
    // fonction to calculate the total value of the cart
  }
}
