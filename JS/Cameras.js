// Mise en place des class

class Cameras {
  constructor(id, name, price, description, imageUrl, lenses) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this.lenses = lenses;
  }

  get FormatedPrice() {
    // return this.price / 100 + "," + (this.price % 100).toFixed(2) + ' €' ;
    return (this.price / 100 ).toLocaleString("EUR", {style: "currency", currency: "EUR"});
  }

}
