//connexion au back-end récupération des données et intégration dans un tableau
const urlAPI = "http://localhost:3000/api/cameras";

async function getCameras() {
  const results = await fetch(urlAPI)
    .then((response) => response.json())
    .then((jsonData) => {
      // jsonData.forEach(element => console.log(element));
      let cameraList = [];
      jsonData.forEach((element) =>
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
      return cameraList;
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
      //nettoyage du localstorage
      localStorage.clear();
      //stockage des éléments de commande en session storage pour l'affichage
      console.log(jsonData);
      sessionStorage.setItem("contact", jsonData.contact);
      sessionStorage.setItem("products", jsonData.products);
      sessionStorage.setItem("orderId", jsonData.orderId);
      // affichage de la réponse de la commande
      responseOrder(jsonData);
      
      return jsonData;
    })
    .catch((error) => {
      console.log(error);
    });

  return result;
}
