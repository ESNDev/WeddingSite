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
    window.location.href = './catalog.html'
}