// Mise en place des class

class Camera {
  constructor(id, name, price, description, imageUrl, lenses) {
    this.id = camera._id;
    this.name = camera.name;
    this.price = camera.price;
    this.description = camera.description;
    this.imageUrl = camera.imageUrl;
    this.lenses = camera.lenses;
  }

  getFormatedPrice() {
    return this.price / 100 + "," + (this.price % 100).toFixed(2);
  }
}
