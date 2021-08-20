class Cart {
  constructor() {
    this.items = JSON.parse(localStorage.getItem("cart")) || [];
  }

  get theItems() {
    return this.items;
  }

  deleteItem(itemSelect) {
    // fonction to remove an item from cart
    const myCart = this.items;
    myCart.splice(itemSelect, 1);
    localStorage.setItem("cart", JSON.stringify(myCart));
    document.location.reload();
  }

  getformatedPrice() {
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

  getTotalValue() {
    // fonction to calculate the total value of the cart
    return ((Number(this.price) * this.quantity) / 100).toLocaleString("EUR", {
      style: "currency",
      currency: "EUR",
    });
  }
}
