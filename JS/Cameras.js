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
    // 2nde façon de convertir le montant pour un affichage clair
    return (this.price / 100).toLocaleString("EUR", {
      style: "currency",
      currency: "EUR",
    });
  }
}
