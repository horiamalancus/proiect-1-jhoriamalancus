function userCheck() {
  let form = document.getElementById("verficaFormular");
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let user = document.getElementById("user").value;
      let password = document.getElementById("password").value;
      let jsonobject = JSON.parse(this.responseText);
      if (
        user === jsonobject[0].utilizator &&
        password === jsonobject[0].parola
      ) {
        let span = document.createElement("span");
        span.innerHTML = "Succes!";
        form.appendChild(span);
      } else {
        alert("Username or password is incorrect!");
      }
    }
  };
  xhttp.open("GET", "resurse/utilizatori.json", true);
  xhttp.send();
}

function register() {
  let user = document.getElementById("numeutilizator").value;
  let password = document.getElementById("parola").value;
  let jsonobject = JSON.stringify({ utilizator: user, parola: password });
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
    }
  };
  xhttp.open("POST", "api/utilizatori", true);
  xhttp.send(jsonobject);
}
