// Test d'égalité superficiel
if (1 == "1") {
  // Je rentre ici
  console.log("Hello");
}

// Test d'égalité stricte
if (1 === "1") {
  // Je ne rentre pas ici (les types sont différents)
  console.log("Hello");
}

// Test d'inégalité stricte
if (1 !== 2) {
  // Je rentre ici (les valeurs sont différentes)
  console.log("Hello");
}

const canDrive = true;
const hasMotorcycle = true;

// ET (&&)
// OU (||)
// Supériorité (>)
// Infériorioté (<)
// ...
if (canDrive) {
  console.log("You can drive");
} else if (hasMotorcycle) {
  console.log("You have a motorcycle, you can drive");
} else {
  console.log("Sorry...");
}

const username = "";

// Ternaire : TEST ? VALEUR SI VRAI : VALEUR SI FAUX
const displayName = username !== "" ? username : "johndoe";

const role = "AMIN";

switch (role) {
    case "ADMINISTRATOR":
      console.log("You are administrator");
      break;

    case "USER":
    case "ANONYMOUS":
      console.log("You are user");
      break;

    default:
      console.log("You are not recognized");
      break;
}
