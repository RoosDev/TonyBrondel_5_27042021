class Cart {
  // constructor(id, cameraName, price, imageUrl, quantity, selectedLense) {
  constructor() {
    this.items = JSON.parse(localStorage.getItem("cart"));
    console.log(this.items);
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    // fonction to add an item to the cart
    if (typeof this.items !== "undefined" && this.items != null) {
      this.items.push(
        new Cart(
          item.id,
          item.name,
          item.price,
          item.imageUrl,
          item.quantityAdd,
          item.lensAdd
        )
      );
    } else {
      // le panier est vide alors création du tableau et ajout du produit.

      this.items = [];
      this.items.push({
        id: camera.id,
        cameraname: camera.name,
        price: camera.price,
        imageUrl: camera.imageUrl,
        quantity: quantityAdd,
        selectedLens: lensAdd,
      });
    }
  }

  removeItem(item) {
    // fonction to remove an item from cart
    let deleteButton = document.querySelector("#deleteProduct");
    deleteButton.addEventListener("click", function (e) {
      console.log(item);
      e.preventDefault();
      cart.splice(item, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      document.location.reload();
    });
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

// if (localStorage.cart) {
//   let products = JSON.parse(localStorage.getItem("cart"));
//   console.log(products);
//   let cartList = [];
//   products.forEach((element) =>
//     cartList.push(
//       new Cart(
//         element.id,
//         element.cameraName,
//         element.price,
//         element.imageUrl,
//         element.quantity,
//         element.selectedLense
//       )
//     )
//   );
// } else {
//   let products = [];
// }
