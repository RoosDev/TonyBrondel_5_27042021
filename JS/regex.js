// Fonction pour vérifier la validité des inputs complétés
    
    // Définition des REGEX
    const regexZipCode      =    new RegExp('^[0-9]{5}', 'i');
    const regexCity         =    new RegExp('^[a-zA-Z]\-\ ')   ;
    const regexTel          =    new RegExp('^0[1-9]([-. ]?[0-9]{2}){4}$', 'i') ;
    const regexEmail        =    new RegExp('^([a-zA-Z0-9_-])+([.]?[a-zA-Z0-9_-]{1,})*@([a-zA-Z0-9-_]{2,}[.])+[a-zA-Z]{2,}\\s*$', 'i') ;
    
        // Récupération des champs de saisie
    let inputZipCode      =    document.querySelector('#zipCode');
    let selectCity        =    document.querySelector('#city');
    let inputTel          =    document.querySelector('#phone');
    let inputEmail        =    document.querySelector('#email');
    
        // Récupération des champs de message de validation
    let divZipCode      =    document.querySelector('#verifZipCode');
    let divCity         =    document.querySelector('#verifCity');
    let divTel          =    document.querySelector('#verifTel');
    let divEmail        =    document.querySelector('#verifEmail');
      
    let buttonValid        =       document.querySelector('#id__ValidBasket');

        // Vérification champs avec regex
    
            // champs code postal
        inputZipCode.addEventListener('input',() => {
            if(inputZipCode.value.match(regexZipCode)){
                divZipCode.classList.remove('hidden')
                divZipCode.classList.remove('text-danger')
                divZipCode.classList.add('text-success')
                divZipCode.classList.add('font-weight-bold')
                divZipCode.innerHTML =   '<em><i class="fas fa-check"></i> Code postal correct</em>'
                buttonValid.removeAttribute("disabled");
            }else{
                divZipCode.classList.remove('hidden')
                divZipCode.classList.remove('text-success')
                divZipCode.classList.add('text-danger')
                divZipCode.classList.add('font-weight-bold')
                divZipCode.innerHTML =   '<p><i class="fas fa-times"></i> Code postal incorrect</p>'
                buttonValid.setAttribute("disabled", "");
            }
        }); 

            // champs Ville
        selectCity.addEventListener('input',() => {
            if(selectCity.value.match(regexCity)){
                divCity.classList.remove('hidden')
                divCity.classList.remove('text-danger')
                divCity.classList.add('text-success')
                divCity.classList.add('font-weight-bold')
                divCity.innerHTML =   '<em><i class="fas fa-check"></i> Ville correcte</em>'
                buttonValid.removeAttribute("disabled");
            }else{
                divCity.classList.remove('hidden')
                divCity.classList.remove('text-success')
                divCity.classList.add('text-danger')
                divCity.classList.add('font-weight-bold')
                divCity.innerHTML =   '<p><i class="fas fa-times"></i> Ville incorrecte</p>'
                buttonValid.setAttribute("disabled", "");
            }
        }); 
            // champs téléphone
        inputTel.addEventListener('input',() => {
            if(inputTel.value.match(regexTel)){
                divTel.classList.remove('hidden')
                divTel.classList.remove('text-danger')
                divTel.classList.add('text-success')
                divTel.classList.add('font-weight-bold')
                divTel.innerHTML =   '<em><i class="fas fa-check"></i> Numéro de téléphone correct</em>'
                buttonValid.removeAttribute("disabled");
            }else{
                divTel.classList.remove('hidden')
                divTel.classList.remove('text-success')
                divTel.classList.add('text-danger')
                divTel.classList.add('font-weight-bold')
                divTel.innerHTML =   '<p><i class="fas fa-times"></i> Numéro de téléphone incorrect</p>'
                buttonValid.setAttribute("disabled", "");
            }
        }); 
            // champs email    
        inputEmail.addEventListener('input',() => {
        if(inputEmail.value.match(regexEmail)){
            divEmail.classList.remove('hidden')
            divEmail.classList.remove('text-danger')
            divEmail.classList.add('text-success')
            divEmail.classList.add('font-weight-bold')
            divEmail.innerHTML =   '<em><i class="fas fa-check"></i> Email correct</em>'
            buttonValid.removeAttribute("disabled");
        }else{
            divEmail.classList.remove('hidden')
            divEmail.classList.remove('text-success')
            divEmail.classList.add('text-danger')
            divEmail.classList.add('font-weight-bold')
            divEmail.innerHTML =   '<p><i class="fas fa-times"></i> Email incorrect</p>'
            buttonValid.setAttribute("disabled", "");
        }
    }); 