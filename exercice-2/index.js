// https://openweathermap.org/api
// Champ de texte avec la possibilité de rentrer un nom de ville
// À chaque fois que je clique sur un bouton "recherche", afficher la météo pour cette ville

// Récupère l'élément du DOM correspondant au formulaire
// https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById
const weatherForm = document.getElementById("weather");

if (!weatherForm) {
  // Lève une exception si l'élément n'est pas trouvé dans le DOM (supprimé manuellement ou ID incorrect)
  // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/throw
  throw new Error("Weather form not found in the current DOM");
}

// Chaque fois que le formulaire est soumi, exécute cette fonction
// https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener
// https://developer.mozilla.org/fr/docs/Web/API/HTMLFormElement/submit_event
weatherForm.addEventListener("submit", function(event) {
  // Empêche le comportement par défaut du navigateur (envoi d'une requête HTTP et rechargement de la page)
  // https://developer.mozilla.org/fr/docs/Web/API/Event/preventDefault
  event.preventDefault();
  
  // Récupère l'élément du DOM correspondant à la balise <input id="key">
  // https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById
  const keyInput = document.getElementById("key");

  // Récupère l'élément du DOM correspondant à la balise <input id="city">
  // https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById
  const cityInput = document.getElementById("city");

  // Récupère l'élément du DOM correspondant à la balise <p id="output"></p>
  // https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById
  const outputElement = document.getElementById("output");

  // Créé un objet permettant d'exécuter des requêtes asynchrones
  // https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest
  const request = new XMLHttpRequest();

  if (!keyInput) {
    // Lève une exception si l'élément n'est pas trouvé dans le DOM (supprimé manuellement ou ID incorrect)
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/throw
    throw new Error("Key input not found in the current DOM");
  }

  if (!cityInput) {
    // Lève une exception si l'élément n'est pas trouvé dans le DOM (supprimé manuellement ou ID incorrect)
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/throw
    throw new Error("City input not found in the current DOM");
  }

  if (!outputElement) {
    // Lève une exception si l'élément n'est pas trouvé dans le DOM (supprimé manuellement ou ID incorrect)
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/throw
    throw new Error("Output element not found in the current DOM");
  }

  // Récupère la valeur du champ de texte
  // https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input#value
  const city = cityInput.value;

  // Récupère la valeur du champ de texte
  // https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input#value
  const key = keyInput.value;

  // Créé l'URL finale permettant de récupérer la temperature pour une ville, en utilisant des °C et en récupérant une réponse au format XML
  const url = "https://api.openweathermap.org/data/2.5/weather?mode=xml&units=metric&q=" + city + "&appid=" + key;

  // La méthode HTTP utilisée pour la requête
  // https://developer.mozilla.org/fr/docs/Web/HTTP/Methods
  const method = "GET";

  // Lorsque la réponse HTTP est récupérée depuis le serveur
  // https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener
  // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/load_event
  request.addEventListener("load", function() {
    // Récupère le document XML parsé de la réponse du serveur
    // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseXML
    const responseXML = request.responseXML;

    // Récupère le premier enfant du document XML (l'élément <current></current>)
    // https://developer.mozilla.org/fr/docs/Web/API/Element/children
    const currentElement = responseXML.children[0];

    // Récupère le deuxième enfant de l'élément <current></current> (qui est l'élément <temperature />)
    // https://developer.mozilla.org/fr/docs/Web/API/Element/children
    const weatherElement = currentElement.children[1];

    // Récupère l'attribut "value" de l'élément <temperature value="12.34" /> (au format texte)
    // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap/getNamedItem
    const temperatureAttribute = weatherElement.attributes.getNamedItem("value");

    // Transforme la temperature texte en temperature en nombre (et renvoi 0 si la transformation échoue, peut être à cause d'une lettre ?)
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
    const temperatureValue = parseFloat(temperatureAttribute.value) || 0;

    // Change le paragraphe final du document HTML pour y ajouter la température de la ville séléctionnée par l'utilisateur
    // https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/innerText
    outputElement.innerText = "Temperature for " + city + " is " + temperatureValue + "°C";
  });

  // Configure la requête
  // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open
  request.open(method, url);

  // Envoi la requête HTTP (c'est le navigateur qui l'envoi pour nous)
  // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send
  request.send();
});
