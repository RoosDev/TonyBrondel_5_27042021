// Mise en place des class

class Camera {
  constructor(id, name, price, description, imageUrl, lenses) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this.lenses = lenses;
  }

  get FormatedPrice() {
    return this.price / 100 + "," + (this.price % 100).toString().padStart(2, '0') + ' €' ; 
    // => pas toFixed  on veut 2 décimales apres la virgule : padStart
    // return (this.price / 100 ).toLocaleString("EUR", {style: "currency", currency: "EUR"});
  }

}
