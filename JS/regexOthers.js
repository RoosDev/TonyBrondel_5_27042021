// Fonction pour vérifier la validité des inputs complétés

// Définition des REGEX
const regexZipCode = new RegExp("^[0-9]{5}", "i");
// const regexCity         =    new RegExp('^[a-zA-Z]\-\ ')   ;
const regexTel = new RegExp("^0[1-9]([-. ]?[0-9]{2}){4}$", "i");
const regexEmail = new RegExp(
  "^([a-zA-Z0-9_-])+([.]?[a-zA-Z0-9_-]{1,})*@([a-zA-Z0-9-_]{2,}[.])+[a-zA-Z]{2,}\\s*$",
  "i"
);

// Récupération des champs de saisie
let inputNom = document.querySelector("#lastname");
let inputPrenom = document.querySelector("#firstname");
let inputAdresse = document.querySelector("#adress");
let inputTel = document.querySelector("#phone");
let inputEmail = document.querySelector("#email");

// Récupération des champs de message de validation
let divNom = document.querySelector("#verifLastName");
let divPrenom = document.querySelector("#verifFirstName");
let divAdresse = document.querySelector("#verifAdress");
let divZipCode = document.querySelector("#verifZipCode");
let divTel = document.querySelector("#verifTel");
let divEmail = document.querySelector("#verifEmail");

let buttonValid = document.querySelector("#id__ValidBasket");

// les champs villes et code postal sont vérifiés dans le fichier api_Gouv.js en meme temps que leur détermination

// Champs nom vide
inputNom.addEventListener("input", () => {
  if (inputNom.value == "" || inputNom.value == undefined) {
    divNom.classList.remove("hidden");
    divNom.classList.remove("text-success");
    divNom.classList.add("text-danger");
    divNom.classList.add("font-weight-bold");
    divNom.innerHTML = '<p><i class="fas fa-times"></i> Le nom est vide</p>';
    buttonValid.setAttribute("disabled", "");
  } else {
    divNom.classList.remove("hidden");
    divNom.classList.remove("text-danger");
    divNom.classList.add("text-success");
    divNom.classList.add("font-weight-bold");
    divNom.innerHTML = '<em><i class="fas fa-check"></i> Nom ajouté</em>';
    buttonValid.removeAttribute("disabled");
  }
});

// Champs prénom vide
inputPrenom.addEventListener("input", () => {
  if (inputPrenom.value == "" || inputPrenom.value == undefined) {
    divPrenom.classList.remove("hidden");
    divPrenom.classList.remove("text-success");
    divPrenom.classList.add("text-danger");
    divPrenom.classList.add("font-weight-bold");
    divPrenom.innerHTML =
      '<p><i class="fas fa-times"></i> Le prénom est vide</p>';
    buttonValid.setAttribute("disabled", "");
  } else {
    divPrenom.classList.remove("hidden");
    divPrenom.classList.remove("text-danger");
    divPrenom.classList.add("text-success");
    divPrenom.classList.add("font-weight-bold");
    divPrenom.innerHTML = '<em><i class="fas fa-check"></i> Prénom ajouté</em>';
    buttonValid.removeAttribute("disabled");
  }
});

// Champs adresse vide
inputAdresse.addEventListener("input", () => {
  if (inputAdresse.value == "" || inputAdresse.value == undefined) {
    divAdresse.classList.remove("hidden");
    divAdresse.classList.remove("text-success");
    divAdresse.classList.add("text-danger");
    divAdresse.classList.add("font-weight-bold");
    divAdresse.innerHTML =
      '<p><i class="fas fa-times"></i> L\'adresse est vide</p>';
    buttonValid.setAttribute("disabled", "");
  } else {
    divAdresse.classList.remove("hidden");
    divAdresse.classList.remove("text-danger");
    divAdresse.classList.add("text-success");
    divAdresse.classList.add("font-weight-bold");
    divAdresse.innerHTML =
      '<em><i class="fas fa-check"></i> Adresse ajoutée</em>';
    buttonValid.removeAttribute("disabled");
  }
});

// champs téléphone
inputTel.addEventListener("input", () => {
  if (inputTel.value.match(regexTel)) {
    divTel.classList.remove("hidden");
    divTel.classList.remove("text-danger");
    divTel.classList.add("text-success");
    divTel.classList.add("font-weight-bold");
    divTel.innerHTML =
      '<em><i class="fas fa-check"></i> Numéro de téléphone correct</em>';
    buttonValid.removeAttribute("disabled");
  } else {
    divTel.classList.remove("hidden");
    divTel.classList.remove("text-success");
    divTel.classList.add("text-danger");
    divTel.classList.add("font-weight-bold");
    divTel.innerHTML =
      '<p><i class="fas fa-times"></i> Numéro de téléphone incorrect</p>';
    buttonValid.setAttribute("disabled", "");
  }
});

// champs email
inputEmail.addEventListener("input", () => {
  if (inputEmail.value.match(regexEmail)) {
    divEmail.classList.remove("hidden");
    divEmail.classList.remove("text-danger");
    divEmail.classList.add("text-success");
    divEmail.classList.add("font-weight-bold");
    divEmail.innerHTML = '<em><i class="fas fa-check"></i> Email correct</em>';
    buttonValid.removeAttribute("disabled");
  } else {
    divEmail.classList.remove("hidden");
    divEmail.classList.remove("text-success");
    divEmail.classList.add("text-danger");
    divEmail.classList.add("font-weight-bold");
    divEmail.innerHTML = '<p><i class="fas fa-times"></i> Email incorrect</p>';
    buttonValid.setAttribute("disabled", "");
  }
});
