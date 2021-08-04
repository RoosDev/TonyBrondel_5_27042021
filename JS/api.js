//connexion au back-end récupération des données et intégration dans un tableau
const url = 'http://localhost:3000/api/cameras';

async function getCameras() {
    const result = await fetch(url)
    .then(response => response.json() )
    .then( jsonData => {
        return jsonData;
    })
    .catch((error) => {
        console.log(error);
    });
    return result;
}

// connexion pour la fiche detail produit

async function getCamera(id) {
    const result = await fetch(url + "/"+id)
    .then(response => response.json() )
    .then( jsonData => {
        return new Camera(jsonData._id, jsonData.name, jsonData.price, jsonData.description, jsonData.imageUrl, jsonData.lenses);
    })
    .catch((error) => {
        console.log(error);
    });
    console.log(result);
    return result;

}


// fonction de connexion et traitement
async function sendOrder() {
      // connexion et envoi de la commande 
      const result = await fetch(url + "/order", {
      method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify(detailOrder)
      })

      .then()
      .catch((error) => {
        console.log(error);
      });

      return result;
}

