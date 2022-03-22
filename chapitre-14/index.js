const button = document.getElementById("get-champions");

button.addEventListener("click", function() {
  const request = new XMLHttpRequest();
  
  request.addEventListener("load", function() {
    const xmlDocument = request.responseXML;
    const xml = xmlDocument.firstElementChild;
    const champions = xml.firstElementChild;
    
    console.log(champions);
    
    for (const champion of champions.children) {
      const championName = champion.children[0].textContent;
    }
  });

  request.open("GET", "./lol.xml");
  
  request.send();
});