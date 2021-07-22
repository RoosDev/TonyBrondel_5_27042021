const url = 'http://localhost:3000/api/cameras';
// let card = document.querySelector('.card');
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

function galleryHome(camera){
    let cardBox                 = document.createElement('div');
    cardBox.classList.add("card") ;
    cardBox.classList.add("col-4") ;

    let cardBoxBody             = document.createElement('div');
    cardBoxBody.classList.add("card-body") ;

    cardBox.innerHTML           =   '<img src="' + camera.imageUrl + '" class="card-img-top" alt="' + camera.name + '"/ >';

    let cardBoxBodyH5           = document.createElement('h5');
    cardBoxBodyH5.classList.add("card-title") ;
    cardBoxBodyH5.textContent   =   camera.name ;


    let cardBoxBodyP            = document.createElement('p');
    cardBoxBodyP.classList.add("card-text") ;
    cardBoxBodyP.textContent    =   camera.lenses ;

    let cardBoxBodyA            = document.createElement('a');
    let cardBoxLink             =       document.createTextNode('en détail');
    cardBoxBodyA.classList.add("btn") ;
    cardBoxBodyA.classList.add("btn-info") ;
    cardBoxBodyA.title   =   camera.name ;
    let cameraNameURL           = camera.name.replace(' ','_');
    cardBoxBodyA.href   =   'pg/cameraDetails.html?camera=/' +  cameraNameURL;


    cardBoxBody.appendChild(cardBoxBodyH5);
    cardBoxBody.appendChild(cardBoxBodyP);
    cardBoxBody.appendChild(cardBoxBodyA);
    cardBoxBodyA.appendChild(cardBoxLink);
    cardBox.appendChild(cardBoxBody);
    cardsList.appendChild(cardBox);
}


async function main() {
    const listCamera = await getCamera();

    listCamera.forEach(result => {
        galleryHome(result);        
    });
   
}

main();
