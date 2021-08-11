function quantityProductInCart() {
    let cart                    =       JSON.parse(localStorage.getItem("cart"));
    let quantityTotal           =       0;

    for(var product in cart){
        const cartP             =       cart[product];
        quantityTotal           =       Number(quantityTotal) + Number(cartP.quantity);

        let navBasket           =       document.querySelector('#navBasket');

        if(quantityTotal > 1){
            navBasket.innerHTML     =       '<i class="fas fa-shopping-cart margin5"></i>' + quantityTotal + ' articles';
        }else{
            navBasket.innerHTML     =       '<i class="fas fa-shopping-cart margin5"></i>' + quantityTotal + ' article';
        }
    }
}

quantityProductInCart()


function amountOfCart() {
    let cart                    =       JSON.parse(localStorage.getItem("cart"));
    let amountWithTaxes         =       0;
    let taxRate                 =       0.2;

    for(var product in cart){
        const cartP                 =       cart[product];
        amountWithTaxes             =       Number(amountWithTaxes)  +   (Number(cartP.price) * Number(cartP.quantity));
    }

    amountWithTaxesDecimal             =        amountWithTaxes   /   100;
    amountWithoutTaxesDecimal          =       (amountWithTaxes   /   (1+taxRate))/100;
    amountofTaxesDecimal               =       (amountWithTaxesDecimal   -   amountWithoutTaxesDecimal);

    amountWithTaxesConvert      =       amountWithTaxesDecimal.toLocaleString("EUR", {style: "currency", currency: "EUR"});
    amountWithoutTaxesConvert   =       amountWithoutTaxesDecimal.toLocaleString("EUR", {style: "currency", currency: "EUR"});
    amountofTaxesConvert        =       amountofTaxesDecimal.toLocaleString("EUR", {style: "currency", currency: "EUR"});
}


function messagePanierVide(message){
    let productLine = document.createElement("div");
    productLine.classList.add("row");
    productLine.classList.add("margeProduct");
    productLine.classList.add("borderL");
    let productLineEmpty = document.createElement("div");
    productLineEmpty.classList.add("col");
    productLineEmpty.classList.add("centerFull");
    productLineEmpty.innerHTML = message;
    TOPB__List.appendChild(productLine);
    productLine.appendChild(productLineEmpty);

    let formBuyer = document.querySelector("#TOPB_Form");
    formBuyer.classList.add("hidden");
    let buttonValid = document.querySelector("#id__ValidBasket");
    buttonValid.setAttribute("disabled", "");

}