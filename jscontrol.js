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
    drapery4();
    candle1();
}

function loadtabledecoritems(){
    vases1();
    vases2();
    vases3();
    vases4();
    vases5();
    vases6();
    vases7();
    vases8();
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
    if(localStorage.getItem("drapery4Selected") == "t")
    {
        drapery4img = document.createElement("img");
        drapery4img.src = "example.png";
        itemlistelement.appendChild(drapery4img);
    }
    if(localStorage.getItem("vases1Selected") == "t")
    {
        vases1img = document.createElement("img");
        vases1img.src = "example.png";
        itemlistelement.appendChild(vases1img);
    }
    if(localStorage.getItem("vases2Selected") == "t")
    {
        vases2img = document.createElement("img");
        vases2img.src = "example.png";
        itemlistelement.appendChild(vases2img);
    }
    if(localStorage.getItem("vases3Selected") == "t")
    {
        vases3img = document.createElement("img");
        vases3img.src = "example.png";
        itemlistelement.appendChild(vases3img);
    }
    if(localStorage.getItem("vases4Selected") == "t")
    {
        vases4img = document.createElement("img");
        vases4img.src = "example.png";
        itemlistelement.appendChild(vases4img);
    }
    if(localStorage.getItem("vases5Selected") == "t")
    {
        vases5img = document.createElement("img");
        vases5img.src = "example.png";
        itemlistelement.appendChild(vases5img);
    }
    if(localStorage.getItem("vases6Selected") == "t")
    {
        vases6img = document.createElement("img");
        vases6img.src = "example.png";
        itemlistelement.appendChild(vases6img);
    }
    if(localStorage.getItem("vases7Selected") == "t")
    {
        vases7img = document.createElement("img");
        vases7img.src = "example.png";
        itemlistelement.appendChild(vases7img);
    }
    if(localStorage.getItem("vases8Selected") == "t")
    {
        vases8img = document.createElement("img");
        vases8img.src = "example.png";
        itemlistelement.appendChild(vases8img);
    }
    if(localStorage.getItem("candle1Selected") == "t")
    {
        candle1img = document.createElement("img");
        candle1img.src = "example.png";
        itemlistelement.appendChild(candle1img);
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

function drapery4clicked(){
    if(localStorage.getItem("drapery4Selected") == "t")
    {
        localStorage.setItem("drapery4Selected", "f");
    }
    else
    {
        localStorage.setItem("drapery4Selected", "t");
    }
    drapery4();
}
function drapery4(){
    drapery4element = document.getElementById("drapery4");
    if(localStorage.getItem("drapery4Selected") == "t")
    {
        drapery4element.style.color = "Red";
        drapery4element.innerText = "X";
    }
    else
    {
        drapery4element.style.color = "#648396";
        drapery4element.innerText = "+";
    }
}

function vases1clicked(){
    if(localStorage.getItem("vases1Selected") == "t")
    {
        localStorage.setItem("vases1Selected", "f");
    }
    else
    {
        localStorage.setItem("vases1Selected", "t");
    }
    vases1();
}
function vases1(){
    vases1element = document.getElementById("vases1");
    if(localStorage.getItem("vases1Selected") == "t")
    {
        vases1element.style.color = "Red";
        vases1element.innerText = "X";
    }
    else
    {
        vases1element.style.color = "#648396";
        vases1element.innerText = "+";
    }
}

function vases2clicked(){
    if(localStorage.getItem("vases2Selected") == "t")
    {
        localStorage.setItem("vases2Selected", "f");
    }
    else
    {
        localStorage.setItem("vases2Selected", "t");
    }
    vases2();
}
function vases2(){
    vases2element = document.getElementById("vases2");
    if(localStorage.getItem("vases2Selected") == "t")
    {
        vases2element.style.color = "Red";
        vases2element.innerText = "X";
    }
    else
    {
        vases2element.style.color = "#648396";
        vases2element.innerText = "+";
    }
}

function vases3clicked(){
    if(localStorage.getItem("vases3Selected") == "t")
    {
        localStorage.setItem("vases3Selected", "f");
    }
    else
    {
        localStorage.setItem("vases3Selected", "t");
    }
    vases3();
}
function vases3(){
    vases3element = document.getElementById("vases3");
    if(localStorage.getItem("vases3Selected") == "t")
    {
        vases3element.style.color = "Red";
        vases3element.innerText = "X";
    }
    else
    {
        vases3element.style.color = "#648396";
        vases3element.innerText = "+";
    }
}

function vases4clicked(){
    if(localStorage.getItem("vases4Selected") == "t")
    {
        localStorage.setItem("vases4Selected", "f");
    }
    else
    {
        localStorage.setItem("vases4Selected", "t");
    }
    vases4();
}
function vases4(){
    vases4element = document.getElementById("vases4");
    if(localStorage.getItem("vases4Selected") == "t")
    {
        vases4element.style.color = "Red";
        vases4element.innerText = "X";
    }
    else
    {
        vases4element.style.color = "#648396";
        vases4element.innerText = "+";
    }
}

function vases5clicked(){
    if(localStorage.getItem("vases5Selected") == "t")
    {
        localStorage.setItem("vases5Selected", "f");
    }
    else
    {
        localStorage.setItem("vases5Selected", "t");
    }
    vases5();
}
function vases5(){
    vases5element = document.getElementById("vases5");
    if(localStorage.getItem("vases5Selected") == "t")
    {
        vases5element.style.color = "Red";
        vases5element.innerText = "X";
    }
    else
    {
        vases5element.style.color = "#648396";
        vases5element.innerText = "+";
    }
}

function vases6clicked(){
    if(localStorage.getItem("vases6Selected") == "t")
    {
        localStorage.setItem("vases6Selected", "f");
    }
    else
    {
        localStorage.setItem("vases6Selected", "t");
    }
    vases6();
}
function vases6(){
    vases6element = document.getElementById("vases6");
    if(localStorage.getItem("vases6Selected") == "t")
    {
        vases6element.style.color = "Red";
        vases6element.innerText = "X";
    }
    else
    {
        vases6element.style.color = "#648396";
        vases6element.innerText = "+";
    }
}

function vases7clicked(){
    if(localStorage.getItem("vases7Selected") == "t")
    {
        localStorage.setItem("vases7Selected", "f");
    }
    else
    {
        localStorage.setItem("vases7Selected", "t");
    }
    vases7();
}
function vases7(){
    vases7element = document.getElementById("vases7");
    if(localStorage.getItem("vases7Selected") == "t")
    {
        vases7element.style.color = "Red";
        vases7element.innerText = "X";
    }
    else
    {
        vases7element.style.color = "#648396";
        vases7element.innerText = "+";
    }
}

function vases8clicked(){
    if(localStorage.getItem("vases8Selected") == "t")
    {
        localStorage.setItem("vases8Selected", "f");
    }
    else
    {
        localStorage.setItem("vases8Selected", "t");
    }
    vases8();
}
function vases8(){
    vases8element = document.getElementById("vases8");
    if(localStorage.getItem("vases8Selected") == "t")
    {
        vases8element.style.color = "Red";
        vases8element.innerText = "X";
    }
    else
    {
        vases8element.style.color = "#648396";
        vases8element.innerText = "+";
    }
}

function candle1clicked(){
    if(localStorage.getItem("candle1Selected") == "t")
    {
        localStorage.setItem("candle1Selected", "f");
    }
    else
    {
        localStorage.setItem("candle1Selected", "t");
    }
    candle1();
}
function candle1(){
    candle1element = document.getElementById("candle1");
    if(localStorage.getItem("candle1Selected") == "t")
    {
        candle1element.style.color = "Red";
        candle1element.innerText = "X";
    }
    else
    {
        candle1element.style.color = "#648396";
        candle1element.innerText = "+";
    }
}