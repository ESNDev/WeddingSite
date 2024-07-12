let itemId = [1, 2, 3];
let itemName = ["Item1", "Item2", "Item3"];
let itemDescription = ["Item1 description goes here...", "Item2 description goes here...", "Item3 description goes here..."];
let itemImage = ["test.png", "test.png", "test.png"];
let galleryImage = ["test.png", "test.png", "test.png", "test.png", "test.png"];

function DropdownButtonClick()
{
    let dropdown = document.getElementById("dropdown")
    if(dropdown.style.display === "none")
    {
        dropdown.style.display = "block";
    }
    else if (dropdown.style.display === "block")
    {
        dropdown.style.display = "none";
    }
    else if (dropdown.style.display === "")
    {
        dropdown.style.display = "block";
    }
}
function RedirectHome()
{
    window.location.href = './index.html'
}
function RedirectCart()
{
    window.location.href = './cart.html'
}
function RedirectCatalog()
{
    window.location.href = './catalog.html';
}
function RedirectGallery()
{
    window.location.href = './gallery.html'
}
function RedirectAboutUs()
{
    window.location.href = './aboutus.html'
}
function CatalogLoad()
{
    let list = document.getElementById("catalogList1");
    for(let i = 0; i < itemId.length; i++)
    {
        let tempList = document.createElement("ul");
        list.appendChild(tempList);
        let img = document.createElement("img");
        img.src = itemImage[i];
        tempList.appendChild(img);
        let li = document.createElement("li");
        tempList.appendChild(li);
        let h2 = document.createElement("h2");
        h2.innerText = itemName[i];
        li.appendChild(h2);
        let p = document.createElement("p");
        p.innerText = itemDescription[i];
        li.appendChild(p);
        let button = document.createElement("button");
        button.innerText = "Add to cart";
        button.onclick = function()
        {
            AddToCart(itemId[i]);
        }
        li.appendChild(button);
    }
    if(localStorage.cartItem != "")
    {
        document.getElementById("cartButton").textContent = "("+JSON.parse(localStorage.cartItem).length+") Cart";
    }
    else
    {
        document.getElementById("cartButton").textContent = "Cart";
    }
}
function GalleryLoad()
{
    let list = document.getElementById("galleryList");
    for(let i = 0; i < galleryImage.length; i++)
    {
        let img = document.createElement("img");
        img.src = galleryImage[i];
        list.appendChild(img);
    }
    if(localStorage.cartItem != "")
    {
        document.getElementById("cartButton").textContent = "("+JSON.parse(localStorage.cartItem).length+") Cart";
    }
    else
    {
        document.getElementById("cartButton").textContent = "Cart";
    }
}
function HomeLoad()
{
    if(localStorage.cartItem != "")
    {
        document.getElementById("cartButton").textContent = "("+JSON.parse(localStorage.cartItem).length+") Cart";
    }
    else
    {
        document.getElementById("cartButton").textContent = "Cart";
    }
}
function CartLoad()
{
    let cartItem = JSON.parse(localStorage.cartItem);
    let list = document.getElementById("cartList");
    for(i = 0; i < cartItem.length; i++)
    {
        let tempId = 0;
        for (ii = 0; ii < itemId.length; ii++)
        {
            if(itemId[ii] === cartItem[i])
            {
                tempId = ii;
            }
        }
        let ul = document.createElement("ul");
        list.appendChild(ul);
        let img = document.createElement("img");
        img.src = itemImage[tempId];
        ul.appendChild(img);
        let ul2 = document.createElement("ul");
        ul.appendChild(ul2);
        let h2 = document.createElement("h2");
        h2.innerText = itemName[tempId];
        ul2.appendChild(h2);
        let p = document.createElement("p");
        p.innerText = itemDescription[tempId];
        ul2.appendChild(p);
        let button = document.createElement("button");
        button.innerText = "Click to remove";
        button.id = i;
        button.onclick = function()
        {
            RemoveFromCart(button.id);
        }
        ul2.appendChild(button);
    }
    if(localStorage.cartItem != "")
    {
        document.getElementById("cartButton").textContent = "("+JSON.parse(localStorage.cartItem).length+") Cart";
    }
    else
    {
        document.getElementById("cartButton").textContent = "Cart";
    }
}
function AboutUsLoad()
{
    if(localStorage.cartItem != "")
    {
        document.getElementById("cartButton").textContent = "("+JSON.parse(localStorage.cartItem).length+") Cart";
    }
    else
    {
        document.getElementById("cartButton").textContent = "Cart";
    }
}

function AddToCart(p_item)
{
    let cartItem = [];
    if(localStorage.cartItem != "")
    {
        cartItem = JSON.parse(localStorage.cartItem);
    }
    cartItem.push(p_item);
    localStorage.cartItem = JSON.stringify(cartItem);
    if(localStorage.cartItem != "")
    {
        document.getElementById("cartButton").textContent = "("+JSON.parse(localStorage.cartItem).length+") Cart";
    }
    else
    {
        document.getElementById("cartButton").textContent = "Cart";
    }
}

function RemoveFromCart(p_i)
{
    let cartItem = [];
    cartItem = JSON.parse(localStorage.cartItem);
    alert(cartItem[p_i]);
    cartItem.splice(p_i, 1);
    localStorage.cartItem = JSON.stringify(cartItem);
    window.location.href = "./cart.html"
}