function quantityProductInCart() {
    let cart                    =       JSON.parse(localStorage.getItem("cart"));
    for(var product in cart){
        const cartP             =       cart[product]
        cartP.quantity +=cartP.quantity;
        console.log(cartP.quantity);
        let navBasket           =       document.querySelector('#navBasket');
        if(cartP.quantity > 1){
            navBasket.innerHTML     =       '<i class="fas fa-shopping-cart margin5"></i>' + cartP.quantity + ' articles';
        }else{
            navBasket.innerHTML     =       '<i class="fas fa-shopping-cart margin5"></i>' + cartP.quantity + ' article';
        }
    }
}

quantityProductInCart()

