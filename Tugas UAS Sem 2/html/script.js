const menuIcons = document.getElementById('menu-icons');
const naba = document.getElementById('naba');


menuIcons.addEventListener('click', () => {
    naba.classList.toggle('nav');
});