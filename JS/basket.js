// Tableau d 'affichage des produits présents dans le panier

function tableOfProduct(items) {
  // fonction de suppression d'un produit
  // function deleteOneProduct(index) {
  //   let deleteButton = document.querySelector("#deleteProduct");
  //   deleteButton.addEventListener("click", function (e) {
  //     console.log(index);
  //     e.preventDefault();
  //     cart.splice(index, 1);
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //     document.location.reload();
  //   });
  // }

  // demarrage de l'affichage du panier en fonction du fait qu'il soit vide ou qu'il contienne des produits.

  if (items.length) {
    for (var i of items) {
      console.log(i);
      let myIndex = items.indexOf(i);
      console.log(myIndex)
      
      let productLine = document.createElement("div");
      productLine.classList.add("row");
      productLine.classList.add("margeProduct");
      productLine.classList.add("borderL");

      let productLineImage = document.createElement("div");
      productLineImage.classList.add("col-2");
      productLineImage.classList.add("centerFull");
      productLineImage.innerHTML =
        '<img src="' +
        i.imageUrl +
        '" class="card-img-top" alt="' +
        i.cameraname +
        '"/ >';

      let productLineBloc = document.createElement("div");
      productLineBloc.classList.add("col-8");
      productLineImage.classList.add("centerFull");
      let productLineBlocTitle = document.createElement("p");
      productLineBlocTitle.classList.add("Dark");
      productLineBlocTitle.innerHTML =
        '<a href="../pages/detailProduits.html?_id=' +
        i.id +
        '">' +
        i.cameraname +
        " - avec l'objectif " +
        i.selectedLens +
        "</a>";

      let productLineBlocText = document.createElement("p");
      productLineBlocText.innerHTML = "Quantité : " + i.quantity;

      let productLineBlocAction = document.createElement("p");
      productLineBlocAction.classList.add("productLineBlocAction");
      productLineBlocAction.innerHTML =
        '<button id="deleteProduct'+myIndex+'" type="button" class="btn btn-light">Supprimer l\'article</button>';

      let productLinePrice = document.createElement("div");
      productLinePrice.classList.add("col-2");
      productLineImage.classList.add("centerFull");
      let productLinePriceText = document.createElement("p");
      let LinePrice = ((Number(i.price) * i.quantity)/100).toLocaleString("EUR", {
        style: "currency",
        currency: "EUR",
      });
      console.log('Prix x qté : ' );
      productLinePriceText.innerHTML = LinePrice;

      TOPB__List.appendChild(productLine);
      productLine.appendChild(productLineImage);
      productLine.appendChild(productLineBloc);
      productLineBloc.appendChild(productLineBlocTitle);
      productLineBloc.appendChild(productLineBlocText);
      productLineBloc.appendChild(productLineBlocAction);
      productLine.appendChild(productLinePrice);
      productLinePrice.appendChild(productLinePriceText);
      

        // items.deleteItem(myIndex);

    }

  } else {

    messagePanierVide('Panier vide');

  }
}





// intégration des montants dans la page
function setupAmounts() {

  let boxPriceWithTaxes = document.querySelector(".PriceTTCP");
  let boxPriceofTaxes = document.querySelector(".PriceTVAP");
  let boxPriceWithoutTaxes = document.querySelector(".PriceHTP");

        // Stockage du montant de la commande
        sessionStorage.setItem("amountTTC", amountWithTaxesConvert);

  boxPriceWithTaxes.textContent = amountWithTaxesConvert;
  boxPriceofTaxes.textContent = amountofTaxesConvert;
  boxPriceWithoutTaxes.textContent = amountWithoutTaxesConvert;
}

// action pour vider le panier au clic

let emptyCartButton = document.querySelector("#emptyBasketButton");
emptyCartButton.addEventListener("click", () => {
  localStorage.removeItem("cart");
  document.location.reload();
});

async function main() {
  let cart = new Cart();
  console.log(cart.items);
  tableOfProduct(cart.items);
  amountOfCart(cart.items);
  setupAmounts();
}

main();
