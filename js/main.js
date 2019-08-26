function openPopup() {
    document.getElementsByClassName("navbar")[0].style.display = "none";
    document.getElementsByClassName("navicons")[0].style.display = "none";
    document.getElementsByClassName("popup")[0].style.display = "block";
}
function closePopup() {
    document.getElementsByClassName("navbar")[0].style.display = "block";
    document.getElementsByClassName("navicons")[0].style.display = "block";
    document.getElementsByClassName("popup")[0].style.display = "none";
}

function openAbout() {
    document.getElementsByClassName("aboutdesc")[0].style.display = "block";
    document.getElementById("about").style.display = "block";
}