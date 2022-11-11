const iconMenu =  document.querySelector('.icon-menu');
const menu = document.querySelector('.menu');

iconMenu.addEventListener("click", function() {
    console.log(menu.classList.toggle("menu-show")); 
})