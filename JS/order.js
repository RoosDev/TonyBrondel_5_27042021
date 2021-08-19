function formatOrder() {
  // Mise en forme du panier pour intégration à la commande (1 tableau qui liste les produits)
  const productsOrder = [];
  const detailCart = JSON.parse(localStorage.getItem("cart"));
  // récupération uniquement de l'id du produit qui est commandé
  for (var article in detailCart) {
    const articleP = detailCart[article];
    productsOrder.push(articleP.id);
  }

  // Mise en forme de la commande avec intégration de tous les éléments pour envoi
  return {
    contact: {
      firstName: document.querySelector("#firstname").value,
      lastName: document.querySelector("#lastname").value,
      address: document.querySelector("#adress").value,
      city: document.querySelector("#city").value,
      email: document.querySelector("#email").value,
    },
    products: productsOrder,
  };
}
  // fonction d'envoi de la commande

const submitForm = document.querySelector("#identityForm");
submitForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let myOrder = formatOrder();
  sendOrder(myOrder);
});

//récupération de la commande

function responseOrder(responseOrder) {
  // arrangement de l'affichage HTML / CSS
  let orderResult = document.querySelector("#orderResult");
  let divbuttonValid = document.querySelector("#TOPB__ValidBasket");
  divbuttonValid.classList.add("hidden");

  let divbuttonDeleteProduct = document.querySelectorAll(".productLineBlocAction");
  for(i=0; i < divbuttonDeleteProduct.length ; i++){
    divbuttonDeleteProduct[i].classList.add("hidden");
  }
  let formOrderer = document.querySelector("#formOrderer");
  formOrderer.classList.add("hidden");
  let titleCart = document.querySelector(".titleCart");
  titleCart.textContent = "Votre commande";
  let TOPB__CodePromo = document.querySelector("#TOPB__CodePromo");
  TOPB__CodePromo.classList.add("hidden");
  let emptyBasketButton = document.querySelector("#emptyBasketButton");
  emptyBasketButton.classList.add("hidden");
  let TOPB__TotalAmounts = document.querySelector("#TOPB__TotalAmounts");
  TOPB__TotalAmounts.classList.remove("col-lg-6");

  // création du bloc d'affichage des informations de la commande
  let orderLine = document.createElement("div");
  orderLine.classList.add("row");
  orderLine.classList.add("margeProduct");
  orderLine.classList.add("borderL");
  let orderLineEmpty = document.createElement("div");
  orderLineEmpty.classList.add("col");
  orderLineEmpty.classList.add("centerFull");
  orderLineEmpty.innerHTML =
    "<h4> Cher " +
    responseOrder.contact.firstName +
    " " +
    responseOrder.contact.lastName +
    ",<br /> <br /> Nous vous confirmons que votre commande N°" +
    responseOrder.orderId +
    ", pour un montant total de " +
    sessionStorage.getItem("amountTTC") +
    " a bien été prise en compte.<br/> Nous vous remercions pour votre confiance et restons à votre disposition si nécessaire...</h4><br /> <h4> Clic - Clac - Merci :)</h4>";
  orderResult.appendChild(orderLine);
  orderLine.appendChild(orderLineEmpty);
}
