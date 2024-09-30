const selectedItems = ["test", "test2"];
drapery1Selected = false;
function indexload(){
    window.location.href="./index.html"
}
function decorload(){
    window.location.href="./decor.html"
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
    window.location.href="./contact.html"
}
function drapery1(){
    if(drapery1Selected)
    {
        drapery1Selected = false;
    }
    else
    {
        const temp = ["drapery1"];
        selectedItems.concat(temp);
        drapery1Selected = true;
        alert(selectedItems);
    }
}