function OpenBurger() {
    var x = document.getElementById("nav-list");
    if (x.className === "nav-menu") {
        x.className += " responsive";
    } else {
        x.className = "nav-menu";
    }
}