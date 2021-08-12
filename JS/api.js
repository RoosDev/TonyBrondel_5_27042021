//connexion au back-end récupération des données et intégration dans un tableau
const urlAPI = "http://localhost:3000/api/cameras";

async function getCameras() {
  const results = await fetch(urlAPI)
    .then((response) => response.json())
    .then((jsonData) => {
      // jsonData.forEach(element => console.log(element));
      let cameraList = [];
      jsonData.forEach(
        (element) =>
          cameraList.push(
            new Cameras(
                element._id,
                element.name,
                element.price,
                element.description,
                element.imageUrl,
                element.lenses
              )
          )
      );
      console.log(cameraList);
      return cameraList
    })
    .catch((error) => {
      console.log(error);
    });
  return results;
}

// connexion pour la fiche detail produit

async function getCamera(id) {
  const result = await fetch(urlAPI + "/" + id)
    .then((response) => response.json())
    .then((jsonData) => {
      return new Camera(
        jsonData._id,
        jsonData.name,
        jsonData.price,
        jsonData.description,
        jsonData.imageUrl,
        jsonData.lenses
      );
    })
    .catch((error) => {
      console.log(error);
    });
  console.log(result);
  return result;
}

// fonction de connexion et traitement pour l'envoi de la commande
async function sendOrder(detailOrder) {
  // connexion et envoi de la commande
  const result = await fetch(urlAPI + "/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(detailOrder),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(response.status + " : " + response.statusText);
      }
    })
    .then((jsonData) => {
      localStorage.clear();
      console.log(jsonData);
      localStorage.setItem("contact", jsonData.contact);
      localStorage.setItem("products", jsonData.products);
      localStorage.setItem("orderId", jsonData.orderId);
      let productLine = document.createElement("div");
      productLine.classList.add("row");
      productLine.classList.add("margeProduct");
      productLine.classList.add("borderL");
      let productLineEmpty = document.createElement("div");
      productLineEmpty.classList.add("col");
      productLineEmpty.classList.add("centerFull");
      productLineEmpty.innerHTML = '<h2> Cher ' + jsonData.contact.firstName + ' ' + jsonData.contact.lastName + ', nous vous confirmons que votre commande N°' + jsonData.orderId + ' a bien été prise en compte.</h2>';
      TOPB__List.appendChild(productLine);
      productLine.appendChild(productLineEmpty);
  
      let formBuyer = document.querySelector("#TOPB_Form");
      formBuyer.classList.add("hidden");
      let buttonValid = document.querySelector("#id__ValidBasket");
      buttonValid.setAttribute("disabled", "");
  

      return jsonData;
    })
    .catch((error) => {
      console.log(error);
    });

  return result;
}
