let menu = document.getElementById('menu');
let closeBtn = document.querySelector('.closeBtn');
let menuBtn = document.querySelector('.menuBtn');

function openMenu(){
    menu.style.display = 'block';
    closeBtn.style.display = 'block';
    menuBtn.style.display = 'none';
}
function closeMenu() {
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'block';
}
let con = document.querySelectorAll('.con');
con.forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = '#contact';
    });});
    let view = document.querySelectorAll('.view');
view.forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = '#projects';
    });});  