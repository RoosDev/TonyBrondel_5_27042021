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

function listeObjectifs(camera) {
    let listLens            =       document.querySelector('#lensSelected');
    let cameraLense         =       camera.lenses;

    //Boucle pour lister les objectifs en tableau :
    listLens.innerHTML += '<option value=""></option>';
    for(var i = 0; i < cameraLense.length; i++) {
        var option = cameraLense[i];
        listLens.innerHTML += "<option value=\"" + option + "\">" + option + "</option>";
    }
}

// fonction pour ajouter les éléments au panier via un localstorage

function addBasket(camera){
    let buyButton           =       document.querySelector('form');

    //fonction d'ajout au panier (local storage)

    //AU CLIC DECLENCHEMENT DE L ACTION
    buyButton.addEventListener('submit', function(e) {

        // desactivation de la fonction de base du bouton
        e.preventDefault();

        // récupération du contenu du panier dans le localstorage et conversion en tableau avec parse
        let cart            =       JSON.parse(localStorage.getItem("cart"));
        let quantityAdd     =       Number(document.querySelector('#quantityOrdered').value);
        const lensAdd       =       document.querySelector('#lensSelected').value;


        // Vérification des prérequis
        // si le panier n'est pas vide

        if(typeof cart !== 'undefined' &&cart != null){
        // Vu que le produit comporte des produits, vérification de l'existance du produit en-cours d'ajout dans la panier

            // Création de la fonction de recherche avec 2 arguments : id Produit +  objectif
            function cameraInCart(cameraAdd){
                return (cameraAdd.id == camera._id && cameraAdd.selectedLens == document.querySelector('#lensSelected').value);
            }
                let cartFind    =       cart.find(cameraInCart);


                // Préparation de la fonction pour afficher un message de confirmation d'ajout au panier durant 5 secondes
                let contenerAlert   =       document.querySelector('#boxMessage');
                let buttonAdd       =       document.querySelector('#addToBasket');
                function messageBasket() {  
                    buttonAdd.classList.add('hidden');
                    contenerAlert.classList.remove('hidden');
                    boxMessage  =       window.setTimeout(messageBox, 5000);
                }
                    function messageBox(){
                        contenerAlert.classList.add('hidden');
                        buttonAdd.classList.remove('hidden');
                    }

            // fin de la fonction de recherche. Pour l'executer appeler l'objet : cartFind

                // console.log("affichage du résultat de la recherche");
                // console.log(cartFind);  
                // console.log("affichage de la quantité de la recherche");
                // console.log("affichage du panier complet");
                // console.log(cart);
                // console.log("fin du panier complet");
            
            //si le produit en-cours d'ajout est déja dans le panier
            if(typeof cartFind != 'undefined'){
                
                // console.log("la quantité ajoutée avant modif");
                // console.log(quantityAdd);
                // on récupère la quantité déja au panier que l'on ajoute à la quantité demandée  pour mettre à jour la quantité
                quantityAdd = quantityAdd + Number(cartFind.quantity);
                // console.log("fin de la nouvelle valeur de la quantité");
                // console.log("index de la recherche : ");
                let indexOfFind = cart.indexOf(cartFind);
                // console.log(cart.indexOf(cartFind));

                // console.log("fin des test sur la recherche");
                // console.log("ajout du produit avec la nouvelle quantité");
                
                cart.push({
                    id          :   camera._id,
                    cameraname  :   camera.name,
                    price       :   camera.price,
                    imageUrl    :   camera.imageUrl, 
                    quantity    :   quantityAdd,
                    selectedLens:   lensAdd,
                });
                // console.log("suppression de la ligne avec la mauvaise quantité");

                cart.splice(indexOfFind , 1);
                
                localStorage.setItem("cart", JSON.stringify(cart));
                quantityProductInCart();
                messageBasket();
            }else{

                cart.push({
                                id          :   camera._id,
                                cameraname  :   camera.name,
                                price       :   camera.price,
                                imageUrl    :   camera.imageUrl, 
                                quantity    :   quantityAdd,
                                selectedLens:   lensAdd,
                });
                localStorage.setItem("cart", JSON.stringify(cart));
                quantityProductInCart();
                messageBasket();
            }
        }else{

            // le panier est vide alors création du tableau et ajout du produit.
            // console.log("le panier est vide alors création du tableau et ajout du produit.");

            const cart        =       [];
            cart.push({
                        id          :   camera._id,
                        cameraname  :   camera.name,
                        price       :   camera.price,
                        imageUrl    :   camera.imageUrl, 
                        quantity    :   quantityAdd,
                        selectedLens:   lensAdd,
            });

                // console.log(cart);
            localStorage.setItem("cart", JSON.stringify(cart));
            quantityProductInCart();
            messageBasket();            
        }
    });
    
}

async function main() {
    var parsedUrl           =       new URL(window.location.href);
    let monIDProduit        =       parsedUrl.searchParams.get("_id");
    const cameraDetails                     =      await getCamera(monIDProduit);
    ficheProduit(cameraDetails); 
    listeObjectifs(cameraDetails);
    addBasket(cameraDetails);
}


main();




