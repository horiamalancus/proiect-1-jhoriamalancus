let id = localStorage.length;

class Produs {
  constructor(numeProdus, cantitate) {
    this.numeProdus = numeProdus;
    this.cantitate = cantitate;
  }
}

function adaugaProdus() {
  id += 1;
  const numeProdus = document.getElementById("produs").value;
  const cantitate = document.getElementById("cantitate").value;
  const produs = new Produs(numeProdus, cantitate);
  localStorage.setItem(id, JSON.stringify(produs));
  console.log(localStorage.length);

  if (window.Worker) {
    const key = "savingItem";
    const myWorker = new Worker("js/worker.js");

    myWorker.postMessage(key);

    myWorker.onmessage = function (e) {
      //Adaugare elemente in tabel
      let table = document.getElementById("shoppingTable");
      table.innerHTML = "<tr><th>Nr.</th><th>Nume Produs</th><th>Cantitate</th></tr>";
      for (let i = 1; i <= localStorage.length; i++) {
        let lsValue = localStorage.getItem(i);
        let element = JSON.parse(lsValue);
        let row2 = document.createElement("tr");
        let ceil4 = document.createElement("td");
        let ceil5 = document.createElement("td");
        let ceil6 = document.createElement("td");
        ceil4.innerHTML = i;
        ceil5.innerHTML = element.numeProdus;
        ceil6.innerHTML = element.cantitate;
        row2.appendChild(ceil4);
        row2.appendChild(ceil5);
        row2.appendChild(ceil6);
        table.appendChild(row2);
      }
    };
  } else {
    console.log("Your browser doesn't support web workers.");
  }
}
