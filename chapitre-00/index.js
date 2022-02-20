function getAuthors() {
  const url = "https://thetestrequest.com/authors.xml";
  const method = "GET";
  const asynchronous = true;
  const authorsElement = document.getElementById("authors");
  const request = new XMLHttpRequest();
  const getAuthorsButton = document.getElementById("get-authors");

  if (!getAuthorsButton || !authorsElement) {
    return;
  }

  authorsElement.innerHTML = "";

  request.addEventListener("load", function() {
    const authors = this.responseXML.firstChild;

    getAuthorsButton.removeAttribute("disabled");
    getAuthorsButton.textContent = "Reload Authors";

    for (const author of authors.children) {
      const authorRowElement = document.createElement("tr");

      for (const authorAttribute of author.children) {
        const authorCellElement = document.createElement("td");

        if (authorAttribute.nodeName === "email") {
          const linkElement = document.createElement("a");
          linkElement.textContent = authorAttribute.textContent;
          linkElement.setAttribute("href", `mailto:${authorAttribute.textContent}`);
          authorCellElement.appendChild(linkElement);
        } else if (authorAttribute.nodeName === "avatar") {
          const linkElement = document.createElement("a");
          linkElement.textContent = "Open in a new tab";
          linkElement.setAttribute("target", "blank");
          linkElement.setAttribute("href", authorAttribute.textContent);
          authorCellElement.appendChild(linkElement);
        } else if (authorAttribute.nodeName === "created-at" || authorAttribute.nodeName === "updated-at") {
          authorCellElement.textContent = new Date(authorAttribute.textContent).toLocaleString("fr-FR");
        } else {
          authorCellElement.textContent = authorAttribute.textContent;
        }

        authorRowElement.appendChild(authorCellElement);
      }

      authorsElement.appendChild(authorRowElement);
    }
  });

  request.open(method, url, asynchronous);
  request.send();
  getAuthorsButton.setAttribute("disabled", true);
}

const getAuthorsButton = document.getElementById("get-authors");

if (!getAuthorsButton) {
  throw new Error("No button to get the list of authors");
}

getAuthorsButton.addEventListener("click", function() {
  getAuthors();
});
