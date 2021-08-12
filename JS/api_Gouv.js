// selectCity
let valueOption = '';

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
          console.log(valueOption);
          document
            .querySelector("#id__ValidBasket")
            .removeAttribute("disabled");
        });
      } else {
        if (inputZipCode.value) {
          selectCity.innerHTML = "";
          selectCity.innerHTML +=
            '<option value="erreur">Aucune commune avec ce code postal.</option>';
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

