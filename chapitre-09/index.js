// Utilisation de crochet, séparation des valeurs par des virgules
const fruits = [
  "banana",
  "apple",
  "pear"
];

// Récupérer la taille du tableau (un tableau est un objet, propriété length)
// console.log(fruits.length);

// Les tableaux sont indexés à partir de 0
// Et dans l'ordre d'insertion des éléments
// console.log(fruits[0]);

// Modification d'une valeur à un index donné
fruits[1] = "strawberry";

// Supprimer une valeur d'un tableau à un index (conserve la taille, transforme la valeur en undefined)
// delete fruits[2];

// Ajout d'un élément à la fin (en utilisant le contexte et une méthode)
fruits.push("lemon");

// Parcours de chaque index du tableau
for (let index = 0; index < fruits.length; index++) {
  // console.log(fruits[index]);
}

// Boucle sur chaque index du tableau (plus simple à écrire)
for (const index in fruits) {
  // console.log(fruits[index]);
}

// Boucle sur chacune des valeurs
for (const fruit of fruits) {
  // console.log(fruit);
}
