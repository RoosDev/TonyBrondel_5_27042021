// Tableau d 'affichage des produits présents dans le panier 

function tableOfProduct(){

    let cart            =       JSON.parse(localStorage.getItem("cart"));


    // demarrage de l'affichage du panier en fonction du fait qu'il soit vide ou qu'il contienne des produits.

    if(typeof cart !== 'undefined' &&cart != null){

        for(var product in cart){
            const cartP                     =       cart[product];
            const indexOfProduct            =       cart.indexOf(cartP);

                    // fonction de suppression d'un produit

                    function deleteArticle(indexOfProduct) {
                        let deleteButton            =       document.querySelector('#deleteProduct');
                        deleteButton.addEventListener("click", function(e){
                            console.log(indexOfProduct);
                            e.preventDefault();
                            cart.splice(indexOfProduct , 1);
                        
                            localStorage.setItem("cart", JSON.stringify(cart));
                            location.reload();
                        });
                    }
        

            let productLine                                 =       document.createElement('div');
                productLine.classList.add("row") ;
                productLine.classList.add("margeProduct") ;
                productLine.classList.add("borderL") ;

                let productLineImage                        =       document.createElement('div');
                    productLineImage.classList.add("col-2") ;
                    productLineImage.classList.add("centerFull") ;
                    productLineImage.innerHTML              =       '<img src="' + 
                                                                    cartP.imageUrl + 
                                                                    '" class="card-img-top" alt="' + 
                                                                    cartP.cameraname + 
                                                                    '"/ >';

                let productLineBloc                         =       document.createElement('div');
                    productLineBloc.classList.add("col-8") ;
                    productLineImage.classList.add("centerFull") ;
                    let productLineBlocTitle                =       document.createElement('p');
                        productLineBlocTitle.classList.add("Dark")
                        productLineBlocTitle.innerHTML      =       '<a href="../pages/detailProduits.html?_id='+ 
                                                                    cartP.id + 
                                                                    '">"' + 
                                                                    cartP.cameraname + 
                                                                    ' - avec l\'objectif ' + 
                                                                    cartP.selectedLens+ 
                                                                    '</a>' ;

                    let productLineBlocText                 =       document.createElement('p');
                        productLineBlocText.innerHTML       =       'Quantité : ' + 
                                                                    cartP.quantity;

                    let productLineBlocAction               =       document.createElement('p');
                        productLineBlocAction.innerHTML     =       '<button id="deleteProduct" type="button" class="btn btn-light">Supprimer l\'article</button>';
                        // deleteArticle(indexOfProduct);

                let productLinePrice                        =       document.createElement('div');
                    productLinePrice.classList.add("col-2") ;
                    productLineImage.classList.add("centerFull") ;
                let productLinePriceText                    =       document.createElement('p');
                    let LinePrice                           =       (Number(cartP.price)/100)*cartP.quantity
                    productLinePriceText.innerHTML          =       LinePrice.toLocaleString("EUR", {style: "currency", currency: "EUR"});
                    
                
            TOPB__List.appendChild(productLine);
                productLine.appendChild(productLineImage);
                productLine.appendChild(productLineBloc);
                    productLineBloc.appendChild(productLineBlocTitle);
                    productLineBloc.appendChild(productLineBlocText);
                    productLineBloc.appendChild(productLineBlocAction);
                productLine.appendChild(productLinePrice);
                    productLinePrice.appendChild(productLinePriceText);

            deleteArticle(indexOfProduct);
            


        };
    }else{
        let productLine        =       document.createElement('div');
            productLine.classList.add("row") ;
            productLine.classList.add("margeProduct") ;
            productLine.classList.add("borderL") ;
            let productLineEmpty                        =       document.createElement('div');
                productLineEmpty.classList.add("col") ;
                productLineEmpty.classList.add("centerFull") ;
                productLineEmpty.innerHTML              =       '<h2> Panier vide </h2>';
        TOPB__List.appendChild(productLine);
            productLine.appendChild(productLineEmpty);

        let formBuyer          =       document.querySelector('#TOPB_Form');
        formBuyer.classList.add("hidden");
        let buttonValid        =       document.querySelector('#id__ValidBasket');
        buttonValid.setAttribute("disabled", "");
    }


}

tableOfProduct();


// intégration des montants dans la page
function setupAmounts(){
    amountOfCart();

    let boxPriceWithTaxes        =     document.querySelector('.PriceTTCP');
    let boxPriceofTaxes          =     document.querySelector('.PriceTVAP');
    let boxPriceWithoutTaxes     =     document.querySelector('.PriceHTP');

    boxPriceWithTaxes.textContent        =       amountWithTaxesConvert;
    boxPriceofTaxes.textContent          =       amountofTaxesConvert;
    boxPriceWithoutTaxes.textContent     =       amountWithoutTaxesConvert;

}
setupAmounts();

// Fonction pour vérifier la validité des inputs complétés
    
    // Définition des REGEX
// const regexLastName     =    new RegExp('^[a-zA-Z]\-\ ')   ;
// const regexFirstName    =    new RegExp('^[a-zA-Z]\-\ ')   ;
// const regexAdress       =    new RegExp('[A-Z]\-\ ')   ;
const regexZipCode      =    new RegExp('^[0-9]{5}', 'i');
const regexCity         =    new RegExp('[A-Z]\-\ ')   ;
const regexTel          =    new RegExp('^0[1-9]([-. ]?[0-9]{2}){4}$', 'i') ;
const regexEmail        =    new RegExp('^([a-zA-Z0-9_-])+([.]?[a-zA-Z0-9_-]{1,})*@([a-zA-Z0-9-_]{2,}[.])+[a-zA-Z]{2,}\\s*$', 'i') ;

    // Récupération des champs de saisie
// let inputLastName     =    document.querySelector('#lastname');
// let inputFirstName    =    document.querySelector('#firstname');
// let inputAdress       =    document.querySelector('#adress');   
let inputZipCode      =    document.querySelector('#zipCode');
let inputCity         =    document.querySelector('#city');
let inputTel          =    document.querySelector('#tel');
let inputEmail        =    document.querySelector('#email');

    // Récupération des champs de message de validation
// let divLastName     =    document.querySelector('#verifLastName');
// let divFirstName    =    document.querySelector('#verifFirstName');
// let divAdress       =    document.querySelector('#verifAdress');   
let divZipCode      =    document.querySelector('#verifZipCode');
let divCity         =    document.querySelector('#verifCity');
let divTel          =    document.querySelector('#verifTel');
let divEmail        =    document.querySelector('#verifEmail');
    
    // Vérification champs avec regex

    inputEmail.addEventListener('input',() => {
    if(inputEmail.value.match(regexEmail)){
        divEmail.classList.remove('hidden')
        divEmail.innerHTML =   '<em>L\'email est correct</em>'
    }else{
        divEmail.classList.remove('hidden')
        divEmail.innerHTML =   '<em>L\'email est incorrect</em>'
    }
}); 