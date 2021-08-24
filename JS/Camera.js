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
    // 1ere façon de convertir le montant pour un affichage clair
    return (
      this.price / 100 +
      "," +
      (this.price % 100).toString().padStart(2, "0") +
      " €"
    );
  }

  get lensesList() {
    let divForm = document.querySelector("#lensSelectedMenu");

    
    divForm.innerHTML =
      '<select id="lensSelected" class="form-control" required > <option value=""></option></select>';
    
      let listLens = document.querySelector("#lensSelected");

    for (var i = 0; i < this.lenses.length; i++) {
      var option = this.lenses[i];
      listLens.innerHTML +=
        '<option value="' + option + '">' + option + "</option>";
    }
  }
}
