function quantityProductInCart() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  let quantityTotal = 0;

  for (var product in cart) {
    const cartP = cart[product];
    quantityTotal = Number(quantityTotal) + Number(cartP.quantity);

    let navBasket = document.querySelector("#navBasket");

    if (quantityTotal > 1) {
      navBasket.innerHTML =
        '<i class="fas fa-shopping-cart margin5"></i>' +
        quantityTotal +
        " articles";
    } else {
      navBasket.innerHTML =
        '<i class="fas fa-shopping-cart margin5"></i>' +
        quantityTotal +
        " article";
    }
  }
}

quantityProductInCart();


// Fonction pour passer un message au format de la page panier.

function messagePanierVide(message) {
  let productLine = document.createElement("div");
  productLine.classList.add("row");
  productLine.classList.add("margeProduct");
  productLine.classList.add("borderL");
  let productLineEmpty = document.createElement("div");
  productLineEmpty.classList.add("col");
  productLineEmpty.classList.add("centerFull");
  productLineEmpty.innerHTML = "<h2>" + message + "</h2>";
  TOPB__List.appendChild(productLine);
  productLine.appendChild(productLineEmpty);

  let EmptyBasket = document.querySelector("#EmptyBasket");
  EmptyBasket.classList.add("hidden");
  let formBuyer = document.querySelector("#TOPB_Form");
  formBuyer.classList.add("hidden");
  let buttonValid = document.querySelector("#id__ValidBasket");
  buttonValid.setAttribute("disabled", "");
}
