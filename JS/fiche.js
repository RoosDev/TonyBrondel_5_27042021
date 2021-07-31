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
    return result;
}


// Mise en forme des données pour l'affichage
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
let cameraLense;

function listeObjectifs(camera) {
    let listLens                            =       document.querySelector('#lensSelected');
    let cameraLense                         =       camera.lenses;

    //Boucle pour lister les objectifs en tableau :
    listLens.innerHTML += '<option value=""></option>';
    for(var i = 0; i < cameraLense.length; i++) {
        var option = cameraLense[i];
        listLens.innerHTML += "<option value=\"" + option + "\">" + option + "</option>";
    }
}

// fonction pour ajouter les éléments au panier via un localstorage

function addBasket(camera){
console.log(camera);
    let buyButton       =       document.querySelector('form');
    

    //fonction d'ajout au panier (local storage)

    buyButton.addEventListener('submit', function(e) {
        e.preventDefault();
        let cart        =       JSON.parse(localStorage.getItem("cart"));

        if(typeof cart !== 'undefined' &&cart != null){
            console.log(cart);
            cart.push({
                            id          :   camera._id,
                            cameraname  :   camera.name,
                            price       :   camera.price,
                            imageUrl    :   camera.imageUrl, 
                            quantity    :   document.querySelector('#quantityOrdered').value,
                            selectedLens:   document.querySelector('#lensSelected').value,
                            });
            console.log(camera);
            console.log(cart);
            localStorage.setItem("cart", JSON.stringify(cart));
                    
        }else{
            let cart        =       [
                                        camera._id,
                                        camera.name,
                                        camera.price,
                                        camera.imageUrl, 
                                        document.querySelector('#quantityOrdered').value,
                                        document.querySelector('#lensSelected').value
                                    ];

            console.log(camera);
            console.log(cart);
            localStorage.setItem("cart", JSON.stringify(cart));

        }


    });

    // buyButton.addEventListener('submit', function(e) {
    //     e.preventDefault();
    //     let cart      =    JSON.parse(localStorage.getItem('cart'));
    //     if ((typeof cart !== 'undefined') && cart !== null){
    //             cart.push({
    //                 ...camera, 
    //                 quantity    :   document.querySelector('#quantityOrdered').value,
    //                 selectedLens:   document.querySelector('#lensSelected').value,

    //             })
    //         }else{
    //             const cart = [...camera, quantity, selectedLens];
    //         }

    //     localStorage.setItem('cart', JSON.stringify(cart));

    // });
    


}

async function main() {
    const cameraDetails                     =      await getCamera();
    ficheProduit(cameraDetails); 
    listeObjectifs(cameraDetails);
    addBasket(cameraDetails);
}


main();




