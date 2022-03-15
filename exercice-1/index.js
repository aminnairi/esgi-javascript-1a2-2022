// <form>
const fruitForm = document.getElementById("fruit-form");

// <input>
const fruitInput = document.getElementById("fruit-text");

// <ul>
const fruitList = document.getElementById("fruit-list");

// <small>
const errorText = document.getElementById("error-text");

fruitForm.addEventListener("submit", function(event) {
  event.preventDefault();   

  errorText.innerText = "";

  const fruitInputValue = fruitInput.value;

  if (fruitInputValue === "") {
    errorText.innerText = "Impossible d'ajouter un fruit vide";
    errorText.style.color = "red";
    return;
  }

  const fruitListItem = document.createElement("li");
  const fruitListItemText = document.createElement("span");
  const fruitListItemRemoveButton = document.createElement("button");

  fruitListItemText.innerText =  fruitInputValue;
  fruitListItemRemoveButton.innerText = "Supprimer";

  fruitListItem.appendChild(fruitListItemRemoveButton);
  fruitListItem.appendChild(fruitListItemText);

  fruitList.appendChild(fruitListItem);

  fruitListItemRemoveButton.addEventListener("click", function() {
    fruitListItem.remove();
    fruitInput.focus();
  });

  fruitForm.reset();
  fruitInput.focus();
});

// 1. Créer un formulaire pour ajouter des fruits
// 2. empêcher que le formulaire puisse ajouter un fruit vide
// 3. Ajouter une zone de message d'erreur qui s'affiche uniquement lorsqu'un fruit vide est ajouté
// 4. Le message d'erreur doit avoir une couleur de texte rouge
// 5. pouvoir supprimer un fruit
// 6. Pouvoir supprimer la zone de texte d'ajout d'un fruit après l'ajout d'un fruit
// 7. Pouvoir récupérer le focus lorsqu'un fruit est ajouté sur la zone de texte d'ajout d'un fruit
// 8. Faire la même chose à la suppression d'un fruit
// 9. Pouvoir modifier un fruit via un bouton "modifier" qui remplace tout par un champ de texte, un bouton "sauvegarder" et un bouton "annuler"
// 10. Le bouton "sauvegarder" doit pouvoir enregistrer les modification et remettre le texte, le bouton "supprimer" et le bouton "modifier"
// 11. Le bouton "annuler" doit pouvoir annuler les modification et remettre le texte, le bouton "supprimer" et le bouton "modifier"
