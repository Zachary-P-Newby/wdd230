function toggleMenu() {
    document.getElementById("burgur").classList.toggle("open");
    document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById("burgur");
x.onclick = toggleMenu;