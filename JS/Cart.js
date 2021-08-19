class Cart {
  constructor() {
    console.log(localStorage.getItem("cart"))
    this.items = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(this.items)
  }

  // class Cart {
//   constructor(id, cameraName, price, imageUrl, quantity, selectedLens) {
//       (this.id = id),
//       (this.cameraName = cameraName),
//       (this.price = price),
//       (this.imageUrl = imageUrl),
//       (this.quantity = quantity),
//       (this.selectedLens = selectedLens);
//   }

  getItems() {
    return this.Items;
  }

  getIndex(){
    Cart.indexOf()
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
        id: item.id,
        cameraname: item.name,
        price: item.price,
        imageUrl: item.imageUrl,
        quantity: item.quantityAdd,
        selectedLens: item.lensAdd,
      });
    }
  }

  removeItem(item) {
    // fonction to remove an item from cart
    let deleteButton = document.querySelector("#deleteProduct");
    deleteButton.addEventListener("click", function (e) {
      e.preventDefault();
      Cart.splice(item, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      document.location.reload();
    });
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

  getProductValue() {
    // fonction qui calcule le montant du produit en fonction de la quantité
  }

  getTotalValue() {
    // fonction to calculate the total value of the cart
  }
}

// async function toCart() {
//   let productsInCart = await JSON.parse(localStorage.getItem("cart"));
//   if (localStorage.cart) {
//     let cartList = [];
//     productsInCart.forEach((element) =>
//       cartList.push(
//         new Cart(
//           element.id,
//           element.cameraname,
//           element.price,
//           element.imageUrl,
//           element.quantity,
//           element.selectedLens
//         )
//       )
//     );
//     return cartList;
//   } else {
//     let products = [];
//   }
// }
