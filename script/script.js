/*Burger Menu*/
const burgerMenu = document.querySelector(".burger-menu");
const linksMenu = document.querySelector(".links-menu");
const linesMenu = document.querySelectorAll(".burger-menu span")



/*Funcion para desplegar el menu en dispositivo 768px o menos*/
burgerMenu.addEventListener('click', () => {
    linksMenu.classList.toggle('activado');
    
    /*Animar las barras del menu en posicion abiertas y cerradas*/
    linesMenu.forEach(child => {child.classList.toggle('animado')})
});


