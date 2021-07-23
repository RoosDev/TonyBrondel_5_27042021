//connexion au back-end récupération des données et intégration dans un tableau

const url = 'http://localhost:3000/api/cameras';
let cardsList = document.querySelector('#cardsList');

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

// paramétrage de l'affichage sur la page d'accueil pour le rendu des cards de chaque produit.

function galleryHome(camera){
    let cardBox                 = document.createElement('div');
    cardBox.classList.add("card") ;
    cardBox.classList.add("col-3") ;

    let cardBoxImage             = document.createElement('div');
    cardBoxImage.classList.add("card-img") ;

    let cardBoxBody             = document.createElement('div');
    cardBoxBody.classList.add("card-body") ;

    let cardBoxPrice             =      document.createElement('div');
    
    
    cardBoxImage.innerHTML           =       '<img src="' + camera.imageUrl + '" class="card-img-top" alt="' + camera.name + '"/ >';

    let cardBoxPriceH5          =       document.createElement('h5');
    let cameraPrice             =       Number(camera.price)/100
    cardBoxPriceH5.textContent  =       cameraPrice.toFixed(2) + ' €' ;
    cardBoxPriceH5.classList.add("card-title") ;
    cardBoxPriceH5.classList.add("H5Center") ;

    let cardBoxBodyH5           =       document.createElement('h5');
    cardBoxBodyH5.textContent   =       camera.name ;
    cardBoxBodyH5.classList.add("card-title") ;


    let cardBoxBodyP            =       document.createElement('p');
    cardBoxBodyP.textContent    =       camera.lenses ;
    cardBoxBodyP.classList.add("card-text") ;

    let cardBoxBodyA            =       document.createElement('a');
    let cardBoxLink             =       document.createTextNode('en détail');
    cardBoxBodyA.href           =       'pages/detailProduits.html?_id=' +  camera._id;
    cardBoxBodyA.classList.add("btn") ;
    cardBoxBodyA.classList.add("btn-warning") ;

    cardsList.appendChild(cardBox);
        cardBox.appendChild(cardBoxImage);
        cardBox.appendChild(cardBoxBody);
            cardBoxBody.appendChild(cardBoxBodyH5);
            cardBoxBody.appendChild(cardBoxBodyP);
        cardBox.appendChild(cardBoxPrice);
            cardBoxPrice.appendChild(cardBoxPriceH5);   
        cardBox.appendChild(cardBoxBodyA);
            cardBoxBodyA.appendChild(cardBoxLink);
}

// fusion des fonctions pour intégration des données (une fois tout récupéré) dans la mise en page

async function main() {
    const listCamera = await getCamera();

    listCamera.forEach(result => {
        galleryHome(result);        
    });
   
}

main();
