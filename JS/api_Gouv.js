
// selectCity
inputZipCode.addEventListener('input',()=> {
    const urlGeoApi = 'https://geo.api.gouv.fr/communes?codePostal='+inputZipCode.value+'&format=json';
    
    fetch(urlGeoApi)
    .then(response => response.json())
    .then (results => {
        selectCity.innerHTML='';
        if(results.length){
            results.forEach( element => {
                console.log(element.nom);
                selectCity.innerHTML += '<option value="'+ element.nom +'">'+ element.nom + '</option>';
                document.querySelector('#id__ValidBasket').removeAttribute("disabled");

            });
        }else{
            if(inputZipCode.value){
                selectCity.innerHTML='';
                console.log('Erreur de code postal');
                selectCity.innerHTML   +=   '<option value="inconnu au bataillon">Aucune commune avec ce code postal.</option>';
                document.querySelector('#id__ValidBasket').setAttribute("disabled", "");

            }else(
                divCity.innerHTML   =   ' '
            )
        }
    
    })
    .catch(error =>{ console.log(error) });
});

// checkResults(laListe){

// };