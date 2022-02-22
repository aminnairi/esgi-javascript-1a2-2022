// Fonction constructrice (appelé avec le mot-clé new)
function User(firstName, lastName) {
  // Modificaton de l'objet (this)
  this.firstName = firstName;
  // L'objet est renvoyé automatiquement par la fonction constructrice
  this.lastName = lastName;

  // Fonction anonyme (pas de nom)
  this.describe = function() {
    return `${this.firstName} ${this.lastName}`;
  };
}

// Lorsque le mot-clé new est utilisé, on créé automatiquement un objet, disponible dans this
const amin = new User("Amin", "NAIRI");
const yves = new User("Yves", "SKRZYPCZYK");
const frederic = new User("Frédéric", "SANANES");

console.log(amin.describe());
console.log(yves.describe());
console.log(frederic.describe());

// Modification
amin.firstName = "Quentin";

// Affiche le nom modifié
console.log(amin.describe());
