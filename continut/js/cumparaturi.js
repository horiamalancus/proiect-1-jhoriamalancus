let id = 0;

class Produs{
    constructor(numeProdus, cantitate){
        this.numeProdus = numeProdus;
        this.cantitate = cantitate;
    }
}

function adaugaProdus(){
    id += 1;
    const numeProdus = document.getElementById("produs").value;
    const cantitate = document.getElementById("cantitate").value;
    const produs = new Produs(numeProdus, cantitate);
    localStorage.setItem(id, JSON.stringify(produs));
}