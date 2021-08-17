// Mise en forme des données pour l'affichage
function ficheProduit(camera) {
  let blocCameraName = document.querySelector("#cameraTitle");
  let blocCameraDescription = document.querySelector("#cameraDescripP");
  let blocCameraImageUrl = document.querySelector("#cameraDescripImg");
  let blocCameraPrice = document.querySelector("#ficheBuy__Price");
  let blocCameraLens = document.querySelector("#cameraLens");
  blocCameraName.textContent = camera.name;
  blocCameraDescription.textContent = camera.description;
  blocCameraImageUrl.src = camera.imageUrl;
  blocCameraImageUrl.alt = camera.name;
  blocCameraPrice.textContent = camera.FormatedPrice;
  blocCameraLens.innerHTML =
    "<p>Pour accompagner votre futur " +
    camera.name +
    ", nous vous proposons les objectifs suivant :  " +
    camera.lenses +
    "</p>";
}

//Fonction pour générer les options de la liste déroulante pour la commande

function listeObjectifs(camera) {
  let listLens = document.querySelector("#lensSelected");
  let cameraLense = camera.lenses;

  //Boucle pour lister les objectifs en tableau :
  listLens.innerHTML += '<option value=""></option>';
  for (var i = 0; i < cameraLense.length; i++) {
    var option = cameraLense[i];
    listLens.innerHTML +=
      '<option value="' + option + '">' + option + "</option>";
  }
}

// fonction pour ajouter les éléments au panier via un localstorage

function addBasket(camera) {
  let buyButton = document.querySelector("form");

  //fonction d'ajout au panier (local storage)

  //AU CLIC DECLENCHEMENT DE L ACTION
  buyButton.addEventListener("submit", function (e) {
    // desactivation de la fonction de base du bouton
    e.preventDefault();

    // récupération du contenu du panier dans le localstorage et conversion en tableau avec parse
    let cart = JSON.parse(localStorage.getItem("cart"));
    let quantityAdd = Number(document.querySelector("#quantityOrdered").value);
    const lensAdd = document.querySelector("#lensSelected").value;

    // Préparation de la fonction pour afficher un message de confirmation d'ajout au panier durant 5 secondes
    let contenerAlert = document.querySelector("#boxMessage");
    let buttonAdd = document.querySelector("#addToBasket");

    // création du message de confirmation d'ajout au panier
    function messageBasket() {
      buttonAdd.classList.add("hidden");
      contenerAlert.classList.remove("hidden");
      boxMessage = window.setTimeout(messageBox, 5000);
    }
    function messageBox() {
      contenerAlert.classList.add("hidden");
      buttonAdd.classList.remove("hidden");
    }

    // Vérification des prérequis
    // si le panier n'est pas vide

    if (typeof cart !== "undefined" && cart != null) {
      // Vu que le produit comporte des produits, vérification de l'existance du produit en-cours d'ajout dans la panier

      // Création de la fonction de recherche avec 2 arguments : id Produit + objectif
      function cameraInCart(cameraAdd) {
        return (
          cameraAdd.id == camera.id &&
          cameraAdd.selectedLens ==
            document.querySelector("#lensSelected").value
        );
      }
      let cartFind = cart.find(cameraInCart);

      //si le produit en-cours d'ajout est déja dans le panier
      if (typeof cartFind != "undefined") {
        cartFind.quantity = quantityAdd;

        localStorage.setItem("cart", JSON.stringify(cart));
        quantityProductInCart();
        messageBasket();
      } else {
        cart.push({
          id: camera.id,
          cameraname: camera.name,
          price: camera.price,
          imageUrl: camera.imageUrl,
          quantity: quantityAdd,
          selectedLens: lensAdd,
        });
        localStorage.setItem("cart", JSON.stringify(cart));
        quantityProductInCart();
        messageBasket();
      }
    } else {
      // le panier est vide alors création du tableau et ajout du produit.

      const cart = [];
      cart.push({
        id: camera.id,
        cameraname: camera.name,
        price: camera.price,
        imageUrl: camera.imageUrl,
        quantity: quantityAdd,
        selectedLens: lensAdd,
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      quantityProductInCart();
      messageBasket();
    }
  });
}

async function main() {
  var parsedUrl = new URL(window.location.href);
  let IDProduit = parsedUrl.searchParams.get("_id");
  const cameraDetails = await getCamera(IDProduit);
  ficheProduit(cameraDetails);
  listeObjectifs(cameraDetails);
  addBasket(cameraDetails);
}

main();
