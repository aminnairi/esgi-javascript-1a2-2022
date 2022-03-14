// anairi@esgi.fr
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

// Récupérer un élément par son identifiant
const fruitList = document.getElementById("fruit-list");
const button = document.getElementById("my-button");

const fruits = [
  "banana",
  "pear",
  "apple"
];

// Récupérer un dataset
const fruitListDataset = fruitList.dataset;

function onButtonClicked() {
  // margin-top -> marginTop
  fruitList.style.marginTop = "100px";
}

// Ajouter un événement (au click)
// button.addEventListener("click", onButtonClicked);

// Créer de toute pièce un élément HTML
// Ajouter du texte à cet elément HTML
// Ajouter l'élément créé à ma liste de fruits

// On boucle sur notre liste de string fruits
for (const fruit of fruits) {
  // Construit un élément HTML (li)
  const fruitElement = document.createElement("li");

  // Ajouter du texte à notre élément HTML
  fruitElement.innerText = fruit;

  // AJouter l'élément créé à son nœud parent
  // fruitList.appendChild(fruitElement);
}


const fruitForm = document.getElementById("fruit-form");
const fruitInput = document.getElementById("fruit-name");

if (fruitForm === null) {
  throw new Error("Unable to find the fruit form");
}

if (fruitInput === null) {
  throw new Error("Unable to find the fruit input");
}

fruitForm.addEventListener("submit", function(event) {
  // Empêche que le navigateur envoie le formulaire en HTTP
  event.preventDefault();

  // Récupérer le contenu que l'utilisateur a tapé
  const fruitName = fruitInput.value;

  // Création de l'élément HTML lié au nouveau fruit
  const fruitElement = document.createElement("li");

  // Ajout du nom du fruit à l'élément créé
  fruitElement.innerText = fruitName;

  // Ajouter l'élément HTML lié au fruit a notre liste de fruit
  fruitList.appendChild(fruitElement);

  // Réinitialise le formulaire
  fruitForm.reset();

  // Remettre le focus sur un input
  fruitInput.focus();
});

// A faire : empêcher que le formulaire puisse ajouter un fruit vide
// A faire : Ajouter une zone de message d'erreur qui s'affiche uniquement lorsqu'un fruit vide est ajouté
// A faire : Le message d'erreur doit avoir une couleur de texte rouge
// A faire : pouvoir supprimer un fruit
