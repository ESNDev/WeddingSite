function indexload(){
    window.location.href="./index.html";
}
function decorload(){
    window.location.href="./decor.html";
}
function tabledecorload(){
    window.location.href="./tabledecor.html";
}
function archesload(){
    window.location.href="./arches.html";
}
function signsload(){
    window.location.href="./signs.html";
}
function tablesload(){
    window.location.href="./tables.html";
}
function linensload(){
    window.location.href="./linens.html";
}
function aboutusload(){
    window.location.href="./aboutme.html";
}
function galleryload(){
    window.location.href="./gallery.html";
}
function contactload(){
    window.location.href="./contact.html";
}

function loaddecoritems(){
    drapery1();
    drapery2();
    drapery3();
}

function itemList(){
    itemlistelement = document.getElementById("itemlist");
    if(localStorage.getItem("drapery1Selected") == "t")
    {
        drapery1img = document.createElement("img");
        drapery1img.src = "example.png";
        itemlistelement.appendChild(drapery1img);
    }
    if(localStorage.getItem("drapery2Selected") == "t")
    {
        drapery2img = document.createElement("img");
        drapery2img.src = "example.png";
        itemlistelement.appendChild(drapery2img);
    }
    if(localStorage.getItem("drapery3Selected") == "t")
    {
        drapery3img = document.createElement("img");
        drapery3img.src = "example.png";
        itemlistelement.appendChild(drapery3img);
    }
}

function drapery1clicked(){
    if(localStorage.getItem("drapery1Selected") == "t")
    {
        localStorage.setItem("drapery1Selected", "f");
    }
    else
    {
        localStorage.setItem("drapery1Selected", "t");
    }
    drapery1();
}
function drapery1(){
    drapery1element = document.getElementById("drapery1");
    if(localStorage.getItem("drapery1Selected") == "t")
    {
        drapery1element.style.color = "Red";
        drapery1element.innerText = "X";
    }
    else
    {
        drapery1element.style.color = "#648396";
        drapery1element.innerText = "+";
    }
}

function drapery2clicked(){
    if(localStorage.getItem("drapery2Selected") == "t")
    {
        localStorage.setItem("drapery2Selected", "f");
    }
    else
    {
        localStorage.setItem("drapery2Selected", "t");
    }
    drapery2();
}
function drapery2(){
    drapery2element = document.getElementById("drapery2");
    if(localStorage.getItem("drapery2Selected") == "t")
    {
        drapery2element.style.color = "Red";
        drapery2element.innerText = "X";
    }
    else
    {
        drapery2element.style.color = "#648396";
        drapery2element.innerText = "+";
    }
}

function drapery3clicked(){
    if(localStorage.getItem("drapery3Selected") == "t")
    {
        localStorage.setItem("drapery3Selected", "f");
    }
    else
    {
        localStorage.setItem("drapery3Selected", "t");
    }
    drapery3();
}
function drapery3(){
    drapery3element = document.getElementById("drapery3");
    if(localStorage.getItem("drapery3Selected") == "t")
    {
        drapery3element.style.color = "Red";
        drapery3element.innerText = "X";
    }
    else
    {
        drapery3element.style.color = "#648396";
        drapery3element.innerText = "+";
    }
}