function data() {
  let d = new Date();
  let URL = window.location.href;
  let locatie = window.location;

  document.getElementById("i1").innerHTML = "Data curenta este:" + d;
  document.getElementById("i2").innerHTML = "URL-ul paginii este:" + URL;
}

function schimbaContinut(resursa) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("continut").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", `${resursa}.html`, true);
  xhttp.send();
}
