// Tableau d 'affichage des produits présents dans le panier

function tableOfProduct(cart) {
  // let cart = JSON.parse(localStorage.getItem("cart"));
  // Cart.id.forEach(element => { console.log(element)})
  console.log('mon Cart : ' + cart);
  // console.log('mon Cart : ' + Cart.getItems());
  


  // fonction de suppression d'un produit
  function deleteOneProduct(indexOfProduct) {
    let deleteButton = document.querySelector("#deleteProduct");
    deleteButton.addEventListener("click", function (e) {
      console.log(indexOfProduct);
      e.preventDefault();
      cart.splice(indexOfProduct, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      document.location.reload();
    });
  }

  // demarrage de l'affichage du panier en fonction du fait qu'il soit vide ou qu'il contienne des produits.

  // if(typeof Cart.getItems !== 'undefined' &&Cart.getItems != null){
  if (typeof cart !== "undefined" && cart != null) {
    for (var product in cart) {
      const cartP = cart[product];
      const indexOfProduct = cart.indexOf(cartP);
      let productLine = document.createElement("div");
      productLine.classList.add("row");
      productLine.classList.add("margeProduct");
      productLine.classList.add("borderL");

      let productLineImage = document.createElement("div");
      productLineImage.classList.add("col-2");
      productLineImage.classList.add("centerFull");
      productLineImage.innerHTML =
        '<img src="' +
        cartP.imageUrl +
        '" class="card-img-top" alt="' +
        cartP.cameraName +
        '"/ >';

      let productLineBloc = document.createElement("div");
      productLineBloc.classList.add("col-8");
      productLineImage.classList.add("centerFull");
      let productLineBlocTitle = document.createElement("p");
      productLineBlocTitle.classList.add("Dark");
      productLineBlocTitle.innerHTML =
        '<a href="../pages/detailProduits.html?_id=' +
        cartP.id +
        '">"' +
        cartP.cameraName +
        " - avec l'objectif " +
        cartP.selectedLens +
        "</a>";

      let productLineBlocText = document.createElement("p");
      productLineBlocText.innerHTML = "Quantité : " + cartP.quantity;

      let productLineBlocAction = document.createElement("p");
      productLineBlocAction.classList.add("productLineBlocAction");
      productLineBlocAction.innerHTML =
        '<button id="deleteProduct" type="button" class="btn btn-light">Supprimer l\'article</button>';

      let productLinePrice = document.createElement("div");
      productLinePrice.classList.add("col-2");
      productLineImage.classList.add("centerFull");
      let productLinePriceText = document.createElement("p");
      let LinePrice = (
        (Number(cartP.price) / 100) *
        cartP.quantity
      ).toLocaleString("EUR", {
        style: "currency",
        currency: "EUR",
      });
      productLinePriceText.innerHTML = LinePrice;
      //Stockage du montant de la commande
      sessionStorage.setItem("amountTTC", LinePrice);

      TOPB__List.appendChild(productLine);
      productLine.appendChild(productLineImage);
      productLine.appendChild(productLineBloc);
      productLineBloc.appendChild(productLineBlocTitle);
      productLineBloc.appendChild(productLineBlocText);
      productLineBloc.appendChild(productLineBlocAction);
      productLine.appendChild(productLinePrice);
      productLinePrice.appendChild(productLinePriceText);
      deleteOneProduct();
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
  const listBasket = await toCart();
  tableOfProduct(listBasket);
  amountOfCart(listBasket);
  setupAmounts();
}

main();
