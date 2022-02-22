// Une collection de données
const user = {
  username: "aminnairi",
  age: 28,
  motorcycle: "Tiger 900",
};

// Affichage d'une valeur d'une propriété
// console.log(user.username);

// Réaffectation de la valeur d'une propriété
user.age = 31;

// Ajout d'une nouvelle propriété
user.email = "anairi@esgi.fr";

// Suppression d'une propriété
delete user.age;

// Propriété calculée (statique)
const propertyName = "email";
console.log(user[propertyName]);

// Pour chaque nom de propriété de l'objet user
for (const propertyName in user) {
  const value = user[propertyName];
  console.log(value);
}
