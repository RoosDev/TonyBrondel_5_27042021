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
  // fonction d'envoi de la commande
}

const submitForm = document.querySelector("#identityForm");
submitForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let myOrder = formatOrder();
  sendOrder(myOrder);
});

//récupération de la commande

function responseOrder(responseOrder) {
  if (responseOrder.ok) {
    console.log(responseOrder.json());
    let orderLine = document.createElement("div");
    orderLine.classList.add("row");
    orderLine.classList.add("margeProduct");
    orderLine.classList.add("borderL");
    let orderLineEmpty = document.createElement("div");
    orderLineEmpty.classList.add("col");
    orderLineEmpty.classList.add("centerFull");
    orderLineEmpty.innerText = "<p>" + responseOrder.json + "</p>";

    orderResult.appendChild(orderLine);
    orderLine.appendChild(orderLineEmpty);

    let formBuyer = document.querySelector("#TOPB_Form");
    formBuyer.classList.add("hidden");
    let buttonValid = document.querySelector("#id__ValidBasket");
    buttonValid.setAttribute("disabled", "");
  }
}
