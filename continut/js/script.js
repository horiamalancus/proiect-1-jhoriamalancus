function adaugaLinie(){
  let tHead = document.getElementById("tHead");
  let table = document.getElementById("tabelJs");
  let numarLc = parseInt(document.getElementById("numarLC").value, 10);
  let color = document.getElementById("culoare");
  let row = table.insertRow(numarLc-1);
  for(let i = 0; i < tHead.children.length; i++)
  {
    cell = row.insertCell(i);
    cell.style.backgroundColor = color.value;
  }
}

function adaugaColoana(){
  let numarLc = parseInt(document.getElementById("numarLC").value, 10);
  let tHead = document.getElementById("tHead");
  let color = document.getElementById("culoare");
  let cell = document.createElement("td");
  cell.style.backgroundColor = color.value;
  let node = document.createTextNode("text coloana");
  cell.appendChild(node);
  tHead.appendChild(cell);
}

var firstX;
var firstY;
var noClicks = 0;
var dX;
var dY;

function draw(e){

  let canvas = document.getElementById("myCanvas");
  let strokeColor = document.getElementById("contur");
  let fillColor = document.getElementById("umplere");
  let ctx = canvas.getContext("2d");

  if(noClicks % 2 == 0) {
    firstX = e.clientX - canvas.getBoundingClientRect().left;
    firstY = e.clientY - canvas.getBoundingClientRect().top;
  } else {
    dX = e.clientX - firstX - canvas.getBoundingClientRect().left;
    dY = e.clientY - firstY - canvas.getBoundingClientRect().top;

    ctx.strokeStyle = strokeColor.value;
    ctx.fillStyle = fillColor.value;
    ctx.lineWidth = "4";

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.rect(firstX , firstY, dX, dY);
    ctx.stroke();
    ctx.fill();
  }
  noClicks++;
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    document.getElementById("browserLocation").innerHTML =
      "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  document.getElementById("browserLocation").innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}

function extragere(){
  let ct=0;
  for(let i=0;i<8;i++)
  {
    x = Math.floor(Math.random()*255);
    y = x.toString(16);
    y = y.toUpperCase();
    document.getElementById("loto").innerHTML = document.getElementById("loto").innerHTML + " " + y;
  }
  for(let i=1;i<9;i++)
  {
    if(document.getElementById("loto").innerHTML.includes(document.getElementById("nr"+i)))
    {
        ct++;
    }
  }
  document.getElementById("nrGhicite").innerHTML = "Ati ghicit " + ct + " numere";
}

function data() {
  let d = new Date();
  let URL = window.location.href;
  let locatie = window.location;
  let x,y;

  setInterval(updatedDate, 1000);
  document.getElementById("location").innerHTML = "URL-ul paginii este:" + URL;

  getLocation();

  document.getElementById("browserName").innerHTML = "Numele Browserului: " + navigator.appCodeName;
  document.getElementById("browserVersion").innerHTML = "Versiunea Browserului este: " + navigator.appVersion;
  document.getElementById("os").innerHTML = "Versiunea Sistemului de operare este: " + navigator.platform;
  
}

function updatedDate() {
  let d = new Date();
  document.getElementById("date").innerHTML = "Data si timpul curent este: " + d;
}

function schimbaContinut(resursa, jsFisier, jsFunctie) {
  for (const tag of document.getElementsByClassName("active")) {
    tag.classList.remove("active");
  }
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("continut").innerHTML = this.responseText;
      if (jsFisier) {
        var elementScript = document.createElement("script");
        elementScript.onload = function () {
          if (jsFunctie) {
            window[jsFunctie]();
          }
        };
        elementScript.src = jsFisier;
        document.head.appendChild(elementScript);
      } else {
        if (jsFunctie) {
          window[jsFunctie]();
        }
      }
    }
  };
  xhttp.open("GET", `${resursa}.html`, true);
  xhttp.send();
  document.getElementById(resursa).classList.add("active");
}
