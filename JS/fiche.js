//récupération de l'id passé dans l'URL
var parsedUrl           =       new URL(window.location.href);
let monIDProduit        =       parsedUrl.searchParams.get("_id");

//requete de récupération des éléments du produit qui nous interesse
const url               =       'http://localhost:3000/api/cameras/' + monIDProduit;
let cardsList           =       document.querySelector('#cardsList');

async function getCamera() {
    const result = await fetch(url)
    .then(response => response.json() )
    .then( jsonData => {
        return jsonData;
    })
    .catch((error) => {
        console.log(error);
    });
    console.log(result);
    return result;
}


function ficheProduit(camera){
    let blocCameraName                      =       document.querySelector('#cameraTitle');
    let blocCameraDescription               =       document.querySelector('#cameraDescripP');
    let blocCameraImageUrl                  =       document.querySelector('#cameraDescripImg');  
    let blocCameraPrice                     =       document.querySelector('#ficheBuy__Price');
        let cameraPrice                     =       Number(camera.price)/100
    let blocCameraLens                      =       document.querySelector('#cameraLens');

    blocCameraName.textContent              =       camera.name;
    blocCameraDescription.textContent       =       camera.description;
    blocCameraImageUrl.src                  =       camera.imageUrl;
    blocCameraImageUrl.alt                  =       camera.name;
    blocCameraPrice.textContent             =       cameraPrice.toFixed(2) + ' €' ;
    blocCameraLens.innerHTML                =       "<p>Pour accompagner votre futur " + camera.name 
                                                    + ", nous vous proposons les objectifs suivant :  " 
                                                    +   camera.lenses + "</p>";
}

//Fonction pour générer les options de la liste déroulante pour la commande
function listeObjectifs(camera) {
    let listLens                            =       document.querySelector('#lensSelect');
    let cameras                             =       camera.lenses;

    //Boucle pour lister les objectifs en tableau :
    for(var i = 0; i < cameras.length; i++) {
        var option = cameras[i];
        listLens.innerHTML += "<option value=\"" + option + "\">" + option + "</option>";
    }
}


async function main() {
    const cameraDetails                     =      await getCamera();
    ficheProduit(cameraDetails); 
    listeObjectifs(cameraDetails);
}


main();

