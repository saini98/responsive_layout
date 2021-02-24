var toggleStatus = 1;
function toggleMenu()
{
    if(toggleStatus == 1)
    {
        document.getElementById("menu").style.right = "-100%";
        toggleStatus=0;
    }
    else if(toggleStatus == 0)
    {
        document.getElementById("menu").style.right = "0";
        toggleStatus=1;
    }
}