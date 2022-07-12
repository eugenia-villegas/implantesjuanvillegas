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


/*Validacion Formulario*/

/*Mensajes de Error*/
let nombreError = document.getElementById('error-nom');
let apelError = document.getElementById('error-apell');
let celError = document.getElementById('error-cel');
let mjeError = document.getElementById('error-mje');
let submitError = document.getElementById('error-submit');


function validarNom() {
    let nombre = document.getElementById('nombre').value;

    if (nombre == "") {
        nombreError.innerHTML = 'Por favor introduzca su nombre';
        return false;
    }

    if (!nombre.match(/^[A-Za-z]/)) {
        nombreError.innerHTML = 'Escriba su nombre';
        return false;
    }

    nombreError.innerHTML = '<i class=\"fa-solid fa-circle-check\"></i>';
    return true;
}

function validarApel() {
    let apel = document.getElementById('apellido').value;

    if (apel == "") {
        apelError.innerHTML = 'Por favor introduzca su apellido';
        return false;
    }

    if (!apel.match(/^[A-Za-z]/)) {
        apelError.innerHTML = 'Escriba su apellido';
        return false;
    }

    apelError.innerHTML = '<i class=\"fa-solid fa-circle-check\"></i>';
    return true;
}

function validarCel() {
    let cel = document.getElementById('celular').value;

    if (cel.length == 0) {
        celError.innerHTML = 'Por favor introduzca un celular';
        return false;
    };

    /*Validation whe the format isnt the correct one*/
    if (!cel.match(/^[0-9]{10}$/)) {
        celError.innerHTML = 'Numero invalido';
        return false;
    }
    /*Validation when its ok*/
    celError.innerHTML = '<i class=\"fa-solid fa-circle-check\"></i>';
    return true;
}

function validarMje(){
    let mensaje = document.getElementById('mensaje').value;
    let required = 30;
    let left = required - mensaje.length;
    /*Validation for when its empty*/
    if (left > 0) {
        mjeError.innerHTML = left + ' more characters required';
        return false;
    };
    
    /*Validation when its ok*/
    mjeError.innerHTML = '<i class=\"fa-solid fa-circle-check\"></i>';
    return true;
}


function validateForm() {
    if (!validarNom() || !validarApel() || !validarCel() || !validarMje()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Complete los campos requeridos.';
        setTimeout(function(){submitError.style.display = 'none';}, 3000)
        return false;
    }
    return true;
}
