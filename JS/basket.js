function tableOfProduct(){

    let cart        =       JSON.parse(localStorage.getItem("cart"));
    
    if(typeof cart !== 'undefined' &&cart != null){

        for(var product in cart){
            const cartP                                 =       cart[product]

            let productLine                            =       document.createElement('div');
                productLine.classList.add("row") ;
                productLine.classList.add("margeProduct") ;
                productLine.classList.add("borderL") ;

                let productLineImage                        =       document.createElement('div');
                    productLineImage.classList.add("col-2") ;
                    productLineImage.classList.add("centerFull") ;
                    productLineImage.innerHTML              =       '<img src="' + cartP.imageUrl + '" class="card-img-top" alt="' + cartP.cameraname + '"/ >';

                let productLineBloc                         =       document.createElement('div');
                    productLineBloc.classList.add("col-8") ;
                    productLineImage.classList.add("centerFull") ;
                    let productLineBlocTitle                =       document.createElement('p');
                        productLineBlocTitle.classList.add("Dark")
                        productLineBlocTitle.innerHTML      =       '<a href="../pages/detailProduits.html?_id='+ cartP.id + '">"' + cartP.cameraname + ' - avec l\'objectif ' + cartP.selectedLens+ '</a>' ;
                    let productLineBlocText                 =       document.createElement('p');
                        productLineBlocText.innerHTML       =       'Quantité : ' + cartP.quantity;
                    let productLineBlocAction               =       document.createElement('p');
                        productLineBlocAction.innerHTML     =       '<button id="deleteProduct" type="button" class="btn btn-warning">Supprimer l\'article</button>';


                let productLinePrice                        =       document.createElement('div');
                    productLinePrice.classList.add("col-2") ;
                    productLineImage.classList.add("centerFull") ;
                let productLinePriceText                    =       document.createElement('p');
                    let LinePrice                           =       (Number(cartP.price)/100)*cartP.quantity
                    productLinePriceText.innerHTML              =       LinePrice.toLocaleString("EUR", {style: "currency", currency: "EUR"});
                    
                
            TOPB__List.appendChild(productLine);
                productLine.appendChild(productLineImage);
                productLine.appendChild(productLineBloc);
                    productLineBloc.appendChild(productLineBlocTitle);
                    productLineBloc.appendChild(productLineBlocText);
                    productLineBloc.appendChild(productLineBlocAction);
                productLine.appendChild(productLinePrice);
                    productLinePrice.appendChild(productLinePriceText);


        };
    }else{
        let productLine               =       document.createElement('div');
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
        let buttonValid             =       document.querySelector('#id__ValidBasket');
        buttonValid.setAttribute("disabled", "");
    }


}

tableOfProduct();


