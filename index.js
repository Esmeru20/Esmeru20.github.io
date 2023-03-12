//Boton header//

const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const slider = document.getElementById('slider');

const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

slider.addEventListener('click', () => {
    let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setTheme(switchToTheme);
});

setTheme(localStorage.getItem('theme') || preferedColorScheme);

// Article - 01 Niñera //

const element1 = document.getElement1ById("myBtn");
element.addEventListener("click", myFunction);

function myFunction() {
    document.getElement1ById("demo").innerHTML = "Entretenimiento. Cuidado personal y psicologico.";
}

/** Article - 02 Productora Gráfica 

const element2 = document.getElement2ById("mybebe");
element.addEventListener("click", myFunction);

function myFunction() {
    document.getElement2ById("vemo").innerHTML = "Ilustración vectorial, diseño. Atención al público y con proveedores (presencial y remota).";
}

**/

ooooo

/** Article - 03 Asistente juridico 

const element3 = document.getElement3ById("myBtn");
element.addEventListener("click", myFunction);

function myFunction() {
    document.getElement3ById("nemo").innerHTML = "Confección de documentación. Entrega de legajos y gestión de tramites. Digitalización y mantenimiento de documentos digitales.";
}

**/