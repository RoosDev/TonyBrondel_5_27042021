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

  getCartTotal() {
    let amountWithTaxes = 0;
    let taxRate = 0.2;
  
    for (const item of this.items) {
      amountWithTaxes += Number(item.price) * Number(item.quantity);
    }
  
    let amountWithTaxesDecimal = amountWithTaxes / 100;
    let amountWithoutTaxesDecimal = amountWithTaxes / (1 + taxRate) / 100;
    let amountofTaxesDecimal = amountWithTaxesDecimal - amountWithoutTaxesDecimal;
  
    const amountWithTaxesConvert = amountWithTaxesDecimal.toLocaleString("EUR", {
      style: "currency",
      currency: "EUR",
    });
    const amountWithoutTaxesConvert = amountWithoutTaxesDecimal.toLocaleString("EUR", {
      style: "currency",
      currency: "EUR",
    });
    const amountofTaxesConvert = amountofTaxesDecimal.toLocaleString("EUR", {
      style: "currency",
      currency: "EUR",
    });
    return {
      taxIncluded : amountWithTaxesConvert,
      taxExcluded : amountWithoutTaxesConvert,
      VAT : amountofTaxesConvert
    }
  }
}
