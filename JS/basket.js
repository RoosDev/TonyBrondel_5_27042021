// Tableau d 'affichage des produits présents dans le panier

function displayProducts(myCart) {
  // demarrage de l'affichage du panier en fonction du fait qu'il soit vide ou qu'il contienne des produits.

  if (myCart.items.length) {
    for (const item of myCart.items) {
      let myIndex = myCart.items.indexOf(item);

      let productLine = document.createElement("div");
      productLine.classList.add("row");
      productLine.classList.add("margeProduct");
      productLine.classList.add("borderL");

      let productLineImage = document.createElement("div");
      productLineImage.classList.add("col-2");
      productLineImage.classList.add("centerFull");
      productLineImage.innerHTML =
        '<img src="' +
        item.imageUrl +
        '" class="card-img-top" alt="' +
        item.cameraname +
        '"/ >';

      let productLineBloc = document.createElement("div");
      productLineBloc.classList.add("col-8");
      productLineImage.classList.add("centerFull");
      let productLineBlocTitle = document.createElement("p");
      productLineBlocTitle.classList.add("Dark");
      productLineBlocTitle.innerHTML =
        '<a href="../pages/detailProduits.html?_id=' +
        item.id +
        '">' +
        item.cameraname +
        " - avec l'objectif " +
        item.selectedLens +
        "</a>";

      let productLineBlocText = document.createElement("p");
      productLineBlocText.innerHTML = "Quantité : " + item.quantity;

      let productLineBlocAction = document.createElement("p");
      productLineBlocAction.classList.add("productLineBlocAction");
      productLineBlocAction.innerHTML =
        '<button id="deleteProduct' +
        myIndex +
        '" type="button" class="btn btn-light">Supprimer l\'article</button>';
      let productLinePrice = document.createElement("div");
      productLinePrice.classList.add("col-2");
      productLineImage.classList.add("centerFull");
      let productLinePriceText = document.createElement("p");
      let LinePrice = ((Number(item.price) * item.quantity) / 100).toLocaleString(
        "EUR",
        {
          style: "currency",
          currency: "EUR",
        }
      );
      productLinePriceText.innerHTML = LinePrice;

      TOPB__List.appendChild(productLine);
      productLine.appendChild(productLineImage);
      productLine.appendChild(productLineBloc);
      productLineBloc.appendChild(productLineBlocTitle);
      productLineBloc.appendChild(productLineBlocText);
      productLineBloc.appendChild(productLineBlocAction);
      productLine.appendChild(productLinePrice);
      productLinePrice.appendChild(productLinePriceText);

      let deleteButton = document.querySelector("#deleteProduct" + myIndex);
      deleteButton.addEventListener("click", () => {
        myCart.deleteItem(myIndex);
      });
    }
  } else {
    messagePanierVide("Panier vide");
  }
}

// intégration des montants dans la page
function displayCartTotal(amount) {
  let boxPriceWithTaxes = document.querySelector("#PriceTTCP");
  let boxPriceofTaxes = document.querySelector("#PriceTVAP");
  let boxPriceWithoutTaxes = document.querySelector("#PriceHTP");

  // Stockage du montant de la commande
  sessionStorage.setItem("amountTTC", amount.taxIncluded);

  boxPriceWithTaxes.textContent = amount.taxIncluded;
  boxPriceofTaxes.textContent = amount.VAT;
  boxPriceWithoutTaxes.textContent = amount.taxExcluded;

}

// action pour vider le panier au clic

let emptyCartButton = document.querySelector("#emptyBasketButton");
emptyCartButton.addEventListener("click", () => {
  localStorage.removeItem("cart");
  document.location.reload();
});

// Appel de la fonction principale pour lancer les fonctions utiles avec les paramètres nécessaires
function main() {
  let cart = new Cart(); // instanciation de la Classe Cart pour récupérer le LocalStorage
  displayProducts(cart); // envoi de la Class panier pour traitement et affichage
  displayCartTotal(cart.getCartTotal());
}

main();
