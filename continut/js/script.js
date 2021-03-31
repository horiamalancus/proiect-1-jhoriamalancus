function data()
{
    let d = new Date();
    let URL = window.location.href;
    let locatie = window.location;

    document.getElementById("i1").innerHTML="Data curenta este:"+d;
    document.getElementById("i2").innerHTML="URL-ul paginii este:"+URL;
}