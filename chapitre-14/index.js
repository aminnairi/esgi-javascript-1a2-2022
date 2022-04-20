const button = document.getElementById("get-champions");
const tableBody = document.getElementById("champions");
const searchInputs = document.getElementsByClassName("search");

for (let searchInputIndex = 0; searchInputIndex < searchInputs.length; searchInputIndex++) {
  const searchInput = searchInputs[searchInputIndex];

  searchInput.addEventListener("input", function() {
    const searchInputValue = searchInput.value;

    for (const row of tableBody.children) {
      const cell = row.children[searchInputIndex];
      const cellText = cell.innerText;
      const isSearchMatching = cellText.toLowerCase().includes(searchInputValue.toLowerCase());

      if (isSearchMatching) {
        row.style.display = "table-row";
      } else {
        row.style.display = "none";
      }
    }
  });
}

button.addEventListener("click", function() {
  const request = new XMLHttpRequest();
  
  request.addEventListener("load", function() {
    tableBody.innerHTML = "";

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
// DONE: faire en sorte que le bouton n'ajoute pas de duplicat de ligne
