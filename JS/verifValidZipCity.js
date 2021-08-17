// Vérification code postal et ville avec regex

inputZipCode.addEventListener("change", () => {
  if (!inputZipCode.value.match(regexZipCode) || valueOption == "erreur") {
    
    divZipCode.classList.remove("hidden");
    divZipCode.classList.remove("text-success");
    divZipCode.classList.add("text-danger");
    divZipCode.classList.add("font-weight-bold");
    divZipCode.innerHTML =
      '<p><i class="fas fa-times"></i> Code postal incorrect</p>';
    buttonValid.setAttribute("disabled", "");
    
  } else {
      divZipCode.classList.remove("hidden");
      divZipCode.classList.remove("text-danger");
      divZipCode.classList.add("text-success");
      divZipCode.classList.add("font-weight-bold");
      divZipCode.innerHTML =
        '<em><i class="fas fa-check"></i> Code postal et ville corrects</em>';
      buttonValid.removeAttribute("disabled");

  }
});
