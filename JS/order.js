// URL  d'envoi de la commande
const url   =       "http://localhost:3000/api/cameras";

// Mise en forme de la commande pour envoi
const detailOrder  =   [];
detailOrder.push({
                contact: {
                            firstName   :   document.querySelector('#firstname').value,
                            lastName    :   document.querySelector('#lasttname').value,
                            address     :   document.querySelector('#adress').value,
                            city        :   document.querySelector('#zipCode').value + ' ' + document.querySelector('#city').value ,
                            email       :   document.querySelector('#email').value
                },
                products: JSON.parse(localStorage.getItem("cart"))
});




// fonction d'envoi de la commande
function send(e) {
    e.preventDefault();
    fetch(url, {
      method: "POST",
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(detailOrder)
    })
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(value) {
        document
          .getElementById("result")
          .innerText = value.postData.text;
    });
  }
  
  document
    .getElementById("form")
    .addEventListener("submit", send);
  