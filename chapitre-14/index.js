const button = document.getElementById("get-champions");
const tableBody = document.getElementById("champions");

button.addEventListener("click", function() {
  const request = new XMLHttpRequest();
  
  request.addEventListener("load", function() {
    const xmlDocument = request.responseXML;
    const xmlTag = xmlDocument.firstElementChild;
    const championsTag = xmlTag.firstElementChild;
    
    for (const championTag of championsTag.children) {
      const tableRow = document.createElement("tr");

      for (const section of championTag.children) {
        if (section.children.length === 0) {
          const tableCell = document.createElement("td");
          
          tableCell.textContent = section.textContent;
          
          tableRow.appendChild(tableCell);

          continue;
        }
        
        for (const skill of section.children) {
          const tableCell = document.createElement("td"); 
          
          tableCell.textContent = skill.textContent;
          
          tableRow.appendChild(tableCell);
        }
      } 
      
      tableBody.appendChild(tableRow);
    }
  });
  
  request.open("GET", "./lol.xml");
  
  request.send();
});

// TODO: ajouter un champ de recherche pour chaque en-tête
// Filtrer les lignes du tableau qui ne correspondent pas à la recherche
// TODO: faire en sorte que le bouton n'ajoute pas de duplicat de ligne
