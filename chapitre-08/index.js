// Définition de la fonction
function sayHello() {
  console.log("Hello");
}

// Appel de la fonction
// sayHello();

// Paramètre
function hello(context) {
  console.log(`Hello, ${context}!`);
}

// hello("world");
// hello("ESGI");

// Plusieurs paramètres séparés par des virgules
function multiply(first, second) {
  // Interpollation
  console.log(`${first} * ${second} = ${first * second}`);
}

// multiply(2, 4);

function subtract(first, second) {
  // Retour de la valeur à l'extérieur de la fonction
  return first - second;
}

// Affichage du résultat de la fonction
// const result = subtract(1, 2);
// console.log(result);

// Fonction variadique (variadic function)
function add(...numbers) {
  let total = 0;

  // Boucle sur les valeurs d'un tableau (et pas un objet!!!)
  for (const index of numbers) {
    total += value;
  }

  return total;
}

console.log(add());
console.log(add(1));
console.log(add(1, 2));
console.log(add(1, 2, 3));
console.log(add(1, 2, 3, 4));
