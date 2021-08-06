// URL  d'envoi de la commande
const url   =       "http://localhost:3000/api/cameras/order";

// Mise en forme de la commande pour envoi
const detailOrder  =   [];
detailOrder.push({
                contact: {
                            firstName   :   document.querySelector('#firstname').value,
                            lastName    :   document.querySelector('#lastname').value,
                            address     :   document.querySelector('#adress').value,
                            city        :   document.querySelector('#zipCode').value + 
                                            ' ' + 
                                            document.querySelector('#city').value ,
                            email       :   document.querySelector('#email').value
                },
                products: JSON.parse(localStorage.getItem("cart"))
});
console.log(detailOrder);
// fonction d'envoi de la commande

const submitForm    =   document.querySelector('#identityForm');
submitForm.addEventListener('submit', sentOrder);

// const connectAndSend    =   async function (detailOrder) {
//   let response    =     await fetch(url, {
//     method: 'POST',
//     headers:  {
//       'Content-Type': 'application/JSON'
//     },
//     body: JSON.stringify(detailOrder)
//   })
// }



function sentOrder(e) {
    e.preventDefault();
    fetch(url, {
      method: "POST",
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(detailOrder)
    })
    // connectAndSend({detailOrder});
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(res) {
      let orderLine        =       document.createElement('div');
      orderLine.classList.add("row") ;
      orderLine.classList.add("margeProduct") ;
      orderLine.classList.add("borderL") ;
      let orderLineEmpty                        =       document.createElement('div');
          orderLineEmpty.classList.add("col") ;
          orderLineEmpty.classList.add("centerFull") ;
          orderLineEmpty.innerText              =       '<p>' + 
                                                        res.json + 
                                                        '</p>';
          
      orderResult.appendChild(orderLine);
        orderLine.appendChild(orderLineEmpty);

      let formBuyer          =       document.querySelector('#TOPB_Form');
      formBuyer.classList.add("hidden");
      let buttonValid        =       document.querySelector('#id__ValidBasket');
      buttonValid.setAttribute("disabled", "");

    });
  }
    

    //récupération de la commande 