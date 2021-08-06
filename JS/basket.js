// Tableau d 'affichage des produits présents dans le panier 

function tableOfProduct(){

    // let cart            =       JSON.parse(localStorage.getItem("cart"));
    Cart.getItems();
    console.log('Affichage du panier nouvelle version' + Cart.getItems());

    // demarrage de l'affichage du panier en fonction du fait qu'il soit vide ou qu'il contienne des produits.

    if(typeof Cart.getItems() !== 'undefined' &&Cart.getItems() != null){

        for(var product in Cart.Items){
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

