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
// console.log(user[propertyName]);

// Pour chaque nom de propriété de l'objet user
for (const propertyName in user) {
  const value = user[propertyName];
  // console.log(value);
}

const tiger900 = {
  brand: "Triumph",
  model: "Tiger 900 Rally Pro",
  // Méthode
  describe: function() {
    // this permet d'accéder à l'objet sur lequel la méthode est appelée
    return `${this.brand}: ${this.model}`;
  }
};

const streetTriple = {
  brand: "Triumph",
  model: "Street Triple 660 A2",
  // Méthode
  describe: function() {
    // this permet d'accéder à l'objet sur lequel la méthode est appelée
    return `${this.brand}: ${this.model}`;
  }
};

const speedTriple = {
  brand: "Triumph",
  model: "Speed Triple 1200 RR",
  // Méthode
  describe: function() {
    // this permet d'accéder à l'objet sur lequel la méthode est appelée
    return `${this.brand}: ${this.model}`;
  }
};

console.log(tiger900.describe());
console.log(streetTriple.describe());
console.log(speedTriple.describe());
