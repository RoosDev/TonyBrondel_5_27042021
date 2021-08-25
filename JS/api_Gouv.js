// selectCity
let valueOption = "";
let inputZipCode = document.querySelector("#zipCode");


let divCityMenuBloc = document.querySelector('#divCityMenu')
divCityMenuBloc.innerHTML='<label for="city" class="form-label">Ville* :</label> <select name="city" id="city" class="form-control" required ></select>';     

let selectCity = document.querySelector("#city");


inputZipCode.addEventListener("input", () => {
  const urlGeoApi =
    "https://geo.api.gouv.fr/communes?codePostal=" +
    inputZipCode.value +
    "&format=json";

  fetch(urlGeoApi)
    .then((response) => response.json())
    .then((results) => {


      selectCity.innerHTML = "";
      if (results.length) {
        results.forEach((element) => {
          selectCity.innerHTML +=
            '<option value="' + element.nom + '">' + element.nom + "</option>";
          valueOption = document.querySelector("#city").value;
          document
            .querySelector("#id__ValidBasket")
            .removeAttribute("disabled");
        });
      } else {
        if (inputZipCode.value) {
          selectCity.innerHTML = "";
          selectCity.innerHTML +=
            '<option value="erreur">Aucune ville avec ce code postal.</option>';
          valueOption = document.querySelector("#city").value;
          console.log(valueOption);
          document
            .querySelector("#id__ValidBasket")
            .setAttribute("disabled", "");
        } else selectCity.innerHTML = " ";
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
