drapery1Selected = false;
function indexload(){
    window.location.href="./index.html";
}
function decorload(){
    window.location.href="./decor.html";
    drapery1();
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
    itemList();
}

function itemList(){
    itemlistelement = document.getElementById("itemlist");
    if(drapery1Selected)
    {
        drapery1img = document.createElement("img");
        itemlistelement.appendchild(drapery1img);
    }
}

function drapery1clicked(){
    if(drapery1Selected)
    {
        drapery1Selected = false;
    }
    else
    {
        drapery1Selected = true;
    }
    drapery1();
}
function drapery1(){
    drapery1element = document.getElementById("drapery1");
    if(drapery1Selected){
        drapery1element.style.color = "#648396";
        drapery1element.innerText = "+";
    }
    else
    {
        drapery1element.style.color = "Red";
        drapery1element.innerText = "X";
    }
}