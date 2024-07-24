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
    if(sessionStorage.cartItem != null)
    {
        if(JSON.parse(sessionStorage.cartItem).length > 0)
        {
            document.getElementById("cartButton").textContent = "("+JSON.parse(sessionStorage.cartItem).length+") Cart";
        }
        else
        {
            document.getElementById("cartButton").textContent = "Cart";
        }
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
    if(sessionStorage.cartItem != null)
    {
        if(JSON.parse(sessionStorage.cartItem).length > 0)
        {
            document.getElementById("cartButton").textContent = "("+JSON.parse(sessionStorage.cartItem).length+") Cart";
        }
        else
        {
            document.getElementById("cartButton").textContent = "Cart";
        }
    }
}
function HomeLoad()
{
    if(sessionStorage.cartItem != null)
    {
        if(JSON.parse(sessionStorage.cartItem).length > 0)
        {
            document.getElementById("cartButton").textContent = "("+JSON.parse(sessionStorage.cartItem).length+") Cart";
        }
        else
        {
            document.getElementById("cartButton").textContent = "Cart";
        }
    }
}
function CartLoad()
{
    let cartItem = [];
    if(sessionStorage.cartItem != null)
    {
        cartItem = JSON.parse(sessionStorage.cartItem);
    }
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
    if(sessionStorage.cartItem != null)
    {
        if(JSON.parse(sessionStorage.cartItem).length > 0)
        {
            document.getElementById("cartButton").textContent = "("+JSON.parse(sessionStorage.cartItem).length+") Cart";
        }
        else
        {
            document.getElementById("cartButton").textContent = "Cart";
            let body = document.getElementById("cartBody");
            let checkoutfirst = document.createElement("h2");
            checkoutfirst.innerText = "The cart is empty";
            body.appendChild(checkoutfirst);
        }
    }
}
function AboutUsLoad()
{
    if(sessionStorage.cartItem != null)
    {
        if(JSON.parse(sessionStorage.cartItem).length > 0)
        {
            document.getElementById("cartButton").textContent = "("+JSON.parse(sessionStorage.cartItem).length+") Cart";
        }
        else
        {
            document.getElementById("cartButton").textContent = "Cart";
        }
    }
}

function AddToCart(p_item)
{
    let canAdd = true;
    let cartItem = [];
    if(sessionStorage.cartItem != "" && sessionStorage.cartItem != null)
    {
        cartItem = JSON.parse(sessionStorage.cartItem);
        for(i = 0; i < cartItem.length; i++)
        {
            if(cartItem[i] === p_item)
            {
                alert("This item is already in your cart.");
                canAdd = false;
            }
        }
    }
    if(canAdd)
    {
        cartItem.push(p_item);
        sessionStorage.cartItem = JSON.stringify(cartItem);
        if(JSON.parse(sessionStorage.cartItem).length > 0)
        {
            document.getElementById("cartButton").textContent = "("+JSON.parse(sessionStorage.cartItem).length+") Cart";
        }
        else
        {
            document.getElementById("cartButton").textContent = "Cart";
        }
    }
}

function RemoveFromCart(p_i)
{
    let cartItem = [];
    cartItem = JSON.parse(sessionStorage.cartItem);
    cartItem.splice(p_i, 1);
    sessionStorage.cartItem = JSON.stringify(cartItem);
    window.location.href = "./cart.html"
}