// Vérification code postal et ville avec regex

inputZipCode.addEventListener("change", () => {
  if (inputZipCode.value.match(regexZipCode)) {
    if (valueOption == "erreur" || valueOption == '' || valueOption == undefined) {
        console.log('si No nok :' + valueOption);

      divZipCode.classList.remove("hidden");
      divZipCode.classList.remove("text-success");
      divZipCode.classList.add("text-danger");
      divZipCode.classList.add("font-weight-bold");
      divZipCode.innerHTML =
        '<p><i class="fas fa-times"></i> Code postal correct mais ville incorrecte</p>';
      buttonValid.setAttribute("disabled", "");
    } else {
        console.log('si ok :' + valueOption);
      divZipCode.classList.remove("hidden");
      divZipCode.classList.remove("text-danger");
      divZipCode.classList.add("text-success");
      divZipCode.classList.add("font-weight-bold");
      divZipCode.innerHTML =
        '<em><i class="fas fa-check"></i> Code postal et ville corrects</em>';
      buttonValid.removeAttribute("disabled");
    }
  } else {
    divZipCode.classList.remove("hidden");
    divZipCode.classList.remove("text-success");
    divZipCode.classList.add("text-danger");
    divZipCode.classList.add("font-weight-bold");
    divZipCode.innerHTML =
      '<p><i class="fas fa-times"></i> Code postal incorrect</p>';
    buttonValid.setAttribute("disabled", "");
  }
});
