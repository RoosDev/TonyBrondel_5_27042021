const url = 'http://localhost:3000/api/cameras';
// let card = document.querySelector('.card');
let cardsList = document.querySelector('#cardsList');

fetch(url)
    .then(response => response.json() )
    .then( data => {

        for (const name of data.camera) {
            let listItem            =       document.createElement('p');
            listItem.textContent    =       "bla bla bla";
            // listItem.textContent    =       name;



            
        }   
    })
    
    .catch((error) => {
        
        console.log(error);

    });

