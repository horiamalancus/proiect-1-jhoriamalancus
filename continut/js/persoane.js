function createTableHead(persons) {
  let table = document.createElement("table");
  table.setAttribute("id", "personTable");
  let div = document.getElementById("unid");
  div.innerHTML = "";
  let row = document.createElement("tr");
  for (let i = 0; i < persons[0].children.length; i++) {
    let ceil = document.createElement("td");
    ceil.innerHTML = persons[0].children[i].nodeName.toUpperCase();
    row.appendChild(ceil);
  }
  table.appendChild(row);
  div.appendChild(table);
}

function createTabel(person) {
  let table = document.getElementById("unid").children[0];
  let row = document.createElement("tr");
  let adresa = "";
  for (let i = 0; i < person.children.length; i++) {
    if (person.children[i].localName === "adresa") {
      for (let j = 0; j < person.children[i].children.length - 1; j++) {
        adresa += person.children[i].children[j].innerHTML + ", ";
      }
      adresa += person.children[i].children[person.children[i].children.length - 1].innerHTML;
      let ceil = document.createElement("td");
      ceil.innerHTML = adresa;
      console.log(ceil);
      row.appendChild(ceil);
    } else {
      let ceil = document.createElement("td");
      ceil.innerHTML = person.children[i].innerHTML;
      row.appendChild(ceil);
    }
  }
  table.appendChild(row);
}

function incarcaPersoane() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let parser = new DOMParser();
      let xmlDoc = parser.parseFromString(this.responseText, "text/xml");
      var persons = xmlDoc.documentElement.children;

      createTableHead(persons);

      for (i = 0; i < persons.length; i++) {
        createTabel(persons[i]);
      }
    }
  };
  xhttp.open("GET", "resurse/persoane.xml", true);
  xhttp.send();
}
