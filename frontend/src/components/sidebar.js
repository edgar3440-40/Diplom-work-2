const categories = document.getElementById('categories');
const categoriesMenu = document.getElementById('categories-menu');
const arrow = document.getElementById('arrow');
const burgerMenu = document.getElementById('burgerMenu');
const sidebar = document.querySelector('.sidebar');

categories.onclick = function () {
    categories.classList.toggle('clicked');

    if(categoriesMenu.classList.contains('show')) {

    }

    categoriesMenu.classList.toggle('show');
    arrow.classList.toggle('show');
}

burgerMenu.onclick = function () {
    sidebar.classList.toggle('show');
}