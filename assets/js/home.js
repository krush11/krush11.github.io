var current_element = document.getElementById('profile');
var menuStatus;

function show_section(section) {
    var element = document.getElementById(section);
    current_element.style.display = "none";
    element.style.display = "revert";
    current_element = element;
    const windowWidth = window.innerWidth;
    if (windowWidth > 1000)
        menuStatus = true;
    else menuStatus = false;
    toggleMenu();
}

function toggleMenu() {
    const windowWidth = window.innerWidth;
    if (windowWidth < 1000)
    if (!menuStatus) {
        document.getElementById("mySidenav").style.display = "none";
        menuStatus = true;
    }
    else {
        document.getElementById("mySidenav").style.display = "flex";
        menuStatus = false;
    }
}
