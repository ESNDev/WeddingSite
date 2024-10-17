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

function submitform() {
    alert("test");
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
}

function loadarchitems(){
    arch1();
    arch2();
}

function loadsignitems(){
    sign1();
    sign2();
    easel1();
    easel2();
}

function loadtableitems(){
    table1();
    table2();
}

function loadlinenitems(){
    linen1();
    linen2();
    linen3();
    linen4();
}

function itemList(){
    itemlistelement = document.getElementById("itemlist");
    if(localStorage.getItem("drapery1Selected") == "t")
    {
        drapery1img = document.createElement("img");
        drapery1img.src = "drapery1.jpg";
        itemlistelement.appendChild(drapery1img);
    }
    if(localStorage.getItem("drapery2Selected") == "t")
    {
        drapery2img = document.createElement("img");
        drapery2img.src = "drapery2.jpg";
        itemlistelement.appendChild(drapery2img);
    }
    if(localStorage.getItem("drapery3Selected") == "t")
    {
        drapery3img = document.createElement("img");
        drapery3img.src = "drapery3.jpg";
        itemlistelement.appendChild(drapery3img);
    }
    if(localStorage.getItem("drapery4Selected") == "t")
    {
        drapery4img = document.createElement("img");
        drapery4img.src = "drapery4.jpg";
        itemlistelement.appendChild(drapery4img);
    }
    if(localStorage.getItem("vases1Selected") == "t")
    {
        vases1img = document.createElement("img");
        vases1img.src = "vase1.jpg";
        itemlistelement.appendChild(vases1img);
    }
    if(localStorage.getItem("vases2Selected") == "t")
    {
        vases2img = document.createElement("img");
        vases2img.src = "vase2.jpg";
        itemlistelement.appendChild(vases2img);
    }
    if(localStorage.getItem("vases3Selected") == "t")
    {
        vases3img = document.createElement("img");
        vases3img.src = "vase3.jpg";
        itemlistelement.appendChild(vases3img);
    }
    if(localStorage.getItem("vases4Selected") == "t")
    {
        vases4img = document.createElement("img");
        vases4img.src = "vase4.jpg";
        itemlistelement.appendChild(vases4img);
    }
    if(localStorage.getItem("vases5Selected") == "t")
    {
        vases5img = document.createElement("img");
        vases5img.src = "vase5.jpg";
        itemlistelement.appendChild(vases5img);
    }
    if(localStorage.getItem("vases6Selected") == "t")
    {
        vases6img = document.createElement("img");
        vases6img.src = "vase6.jpg";
        itemlistelement.appendChild(vases6img);
    }
    if(localStorage.getItem("candle1Selected") == "t")
    {
        candle1img = document.createElement("img");
        candle1img.src = "candles1.jpg";
        itemlistelement.appendChild(candle1img);
    }
    if(localStorage.getItem("arch1Selected") == "t")
    {
        arch1img = document.createElement("img");
        arch1img.src = "example.png";
        itemlistelement.appendChild(arch1img);
    }
    if(localStorage.getItem("arch2Selected") == "t")
    {
        arch2img = document.createElement("img");
        arch2img.src = "example.png";
        itemlistelement.appendChild(arch2img);
    }
    if(localStorage.getItem("sign1Selected") == "t")
    {
        sign1img = document.createElement("img");
        sign1img.src = "example.png";
        itemlistelement.appendChild(sign1img);
    }
    if(localStorage.getItem("sign2Selected") == "t")
    {
        sign2img = document.createElement("img");
        sign2img.src = "example.png";
        itemlistelement.appendChild(sign2img);
    }
    if(localStorage.getItem("easel1Selected") == "t")
    {
        easel1img = document.createElement("img");
        easel1img.src = "example.png";
        itemlistelement.appendChild(easel1img);
    }
    if(localStorage.getItem("easel2Selected") == "t")
    {
        easel2img = document.createElement("img");
        easel2img.src = "example.png";
        itemlistelement.appendChild(easel2img);
    }
    if(localStorage.getItem("table1Selected") == "t")
    {
        table1img = document.createElement("label");
        table1img.innerText = "120 in.";
        itemlistelement.appendChild(table1img);
    }
    if(localStorage.getItem("table2Selected") == "t")
    {
        table2img = document.createElement("label");
        table2img.innerText = "Rectangle, 90 x 156 in.";
        itemlistelement.appendChild(table2img);
    }
    if(localStorage.getItem("linen1Selected") == "t")
    {
        linen1img = document.createElement("img");
        linen1img.src = "example.png";
        itemlistelement.appendChild(linen1img);
    }
    if(localStorage.getItem("linen2Selected") == "t")
    {
        linen2img = document.createElement("label");
        linen2img.innerText = "Black table cloths";
        itemlistelement.appendChild(linen2img);
    }
    if(localStorage.getItem("linen3Selected") == "t")
    {
        linen3img = document.createElement("label");
        linen3img.innerText = "Rectangle, 90 x 156 in.";
        itemlistelement.appendChild(linen3img);
    }
    if(localStorage.getItem("linen4Selected") == "t")
    {
        linen4img = document.createElement("label");
        linen4img.innerText = "White chair covers";
        itemlistelement.appendChild(linen4img);
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

function arch1clicked(){
    if(localStorage.getItem("arch1Selected") == "t")
    {
        localStorage.setItem("arch1Selected", "f");
    }
    else
    {
        localStorage.setItem("arch1Selected", "t");
    }
    arch1();
}
function arch1(){
    arch1element = document.getElementById("arch1");
    if(localStorage.getItem("arch1Selected") == "t")
    {
        arch1element.style.color = "Red";
        arch1element.innerText = "X";
    }
    else
    {
        arch1element.style.color = "#648396";
        arch1element.innerText = "+";
    }
}

function arch2clicked(){
    if(localStorage.getItem("arch2Selected") == "t")
    {
        localStorage.setItem("arch2Selected", "f");
    }
    else
    {
        localStorage.setItem("arch2Selected", "t");
    }
    arch2();
}
function arch2(){
    arch2element = document.getElementById("arch2");
    if(localStorage.getItem("arch2Selected") == "t")
    {
        arch2element.style.color = "Red";
        arch2element.innerText = "X";
    }
    else
    {
        arch2element.style.color = "#648396";
        arch2element.innerText = "+";
    }
}

function sign1clicked(){
    if(localStorage.getItem("sign1Selected") == "t")
    {
        localStorage.setItem("sign1Selected", "f");
    }
    else
    {
        localStorage.setItem("sign1Selected", "t");
    }
    sign1();
}
function sign1(){
    sign1element = document.getElementById("sign1");
    if(localStorage.getItem("sign1Selected") == "t")
    {
        sign1element.style.color = "Red";
        sign1element.innerText = "X";
    }
    else
    {
        sign1element.style.color = "#648396";
        sign1element.innerText = "+";
    }
}

function sign2clicked(){
    if(localStorage.getItem("sign2Selected") == "t")
    {
        localStorage.setItem("sign2Selected", "f");
    }
    else
    {
        localStorage.setItem("sign2Selected", "t");
    }
    sign2();
}
function sign2(){
    sign2element = document.getElementById("sign2");
    if(localStorage.getItem("sign2Selected") == "t")
    {
        sign2element.style.color = "Red";
        sign2element.innerText = "X";
    }
    else
    {
        sign2element.style.color = "#648396";
        sign2element.innerText = "+";
    }
}

function easel1clicked(){
    if(localStorage.getItem("easel1Selected") == "t")
    {
        localStorage.setItem("easel1Selected", "f");
    }
    else
    {
        localStorage.setItem("easel1Selected", "t");
    }
    easel1();
}
function easel1(){
    easel1element = document.getElementById("easel1");
    if(localStorage.getItem("easel1Selected") == "t")
    {
        easel1element.style.color = "Red";
        easel1element.innerText = "X";
    }
    else
    {
        easel1element.style.color = "#648396";
        easel1element.innerText = "+";
    }
}

function easel2clicked(){
    if(localStorage.getItem("easel2Selected") == "t")
    {
        localStorage.setItem("easel2Selected", "f");
    }
    else
    {
        localStorage.setItem("easel2Selected", "t");
    }
    easel2();
}
function easel2(){
    easel2element = document.getElementById("easel2");
    if(localStorage.getItem("easel2Selected") == "t")
    {
        easel2element.style.color = "Red";
        easel2element.innerText = "X";
    }
    else
    {
        easel2element.style.color = "#648396";
        easel2element.innerText = "+";
    }
}

function table1clicked(){
    if(localStorage.getItem("table1Selected") == "t")
    {
        localStorage.setItem("table1Selected", "f");
    }
    else
    {
        localStorage.setItem("table1Selected", "t");
    }
    table1();
}
function table1(){
    table1element = document.getElementById("table1");
    if(localStorage.getItem("table1Selected") == "t")
    {
        table1element.style.color = "Red";
        table1element.innerText = "X";
    }
    else
    {
        table1element.style.color = "#648396";
        table1element.innerText = "+";
    }
}

function table2clicked(){
    if(localStorage.getItem("table2Selected") == "t")
    {
        localStorage.setItem("table2Selected", "f");
    }
    else
    {
        localStorage.setItem("table2Selected", "t");
    }
    table2();
}
function table2(){
    table2element = document.getElementById("table2");
    if(localStorage.getItem("table2Selected") == "t")
    {
        table2element.style.color = "Red";
        table2element.innerText = "X";
    }
    else
    {
        table2element.style.color = "#648396";
        table2element.innerText = "+";
    }
}

function linen1clicked(){
    if(localStorage.getItem("linen1Selected") == "t")
    {
        localStorage.setItem("linen1Selected", "f");
    }
    else
    {
        localStorage.setItem("linen1Selected", "t");
    }
    linen1();
}
function linen1(){
    linen1element = document.getElementById("linen1");
    if(localStorage.getItem("linen1Selected") == "t")
    {
        linen1element.style.color = "Red";
        linen1element.innerText = "X";
    }
    else
    {
        linen1element.style.color = "#648396";
        linen1element.innerText = "+";
    }
}

function linen2clicked(){
    if(localStorage.getItem("linen2Selected") == "t")
    {
        localStorage.setItem("linen2Selected", "f");
    }
    else
    {
        localStorage.setItem("linen2Selected", "t");
    }
    linen2();
}
function linen2(){
    linen2element = document.getElementById("linen2");
    if(localStorage.getItem("linen2Selected") == "t")
    {
        linen2element.style.color = "Red";
        linen2element.innerText = "X";
    }
    else
    {
        linen2element.style.color = "#648396";
        linen2element.innerText = "+";
    }
}

function linen3clicked(){
    if(localStorage.getItem("linen3Selected") == "t")
    {
        localStorage.setItem("linen3Selected", "f");
    }
    else
    {
        localStorage.setItem("linen3Selected", "t");
    }
    linen3();
}
function linen3(){
    linen3element = document.getElementById("linen3");
    if(localStorage.getItem("linen3Selected") == "t")
    {
        linen3element.style.color = "Red";
        linen3element.innerText = "X";
    }
    else
    {
        linen3element.style.color = "#648396";
        linen3element.innerText = "+";
    }
}

function linen4clicked(){
    if(localStorage.getItem("linen4Selected") == "t")
    {
        localStorage.setItem("linen4Selected", "f");
    }
    else
    {
        localStorage.setItem("linen4Selected", "t");
    }
    linen4();
}
function linen4(){
    linen4element = document.getElementById("linen4");
    if(localStorage.getItem("linen4Selected") == "t")
    {
        linen4element.style.color = "Red";
        linen4element.innerText = "X";
    }
    else
    {
        linen4element.style.color = "#648396";
        linen4element.innerText = "+";
    }
}