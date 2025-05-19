function EnableHighContrast()
{
    document.querySelectorAll("*").forEach(element => {
        if (element.nodeType === 1) {
            element.style.color = "white";
            element.style.backgroundColor = "black";
            element.style.backgroundImage = "";
            element.style.textTransform = "uppercase";
        }
    });
}
