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

/** Article - 01 Niñera 

const element1 = document.getElement1ById("myBtn");
element.addEventListener("click", myFunction);

function myFunction() {
    document.getElement1ById("demo").innerHTML = "Entretenimiento. Cuidado personal y psicologico.";
}

**/

let element = document.getElementById("myBtn");
element.addEventListener("click", function() {
  document.getElementById("demo").innerHTML = "Entretenimiento. Cuidado personal y psicologico.";
});

/** Article - 02 Productora Gráfica 

const element2 = document.getElement2ById("mybebe");
element.addEventListener("click", myFunction);

function myFunction() {
    document.getElement2ById("vemo").innerHTML = "Ilustración vectorial, diseño. Atención al público y con proveedores (presencial y remota).";
}

**/

let element2 = document.getElement2ById("myBtn2");
element2.addEventListener("click", function() {
  document.getElement2ById("demo2").innerHTML = "Ilustración vectorial, diseño. Atención al público y con proveedores (presencial y remota).";
});

/** Article - 03 Asistente juridico 

const element3 = document.getElement3ById("myBtn");
element.addEventListener("click", myFunction);

function myFunction() {
    document.getElement3ById("nemo").innerHTML = "Confección de documentación. Entrega de legajos y gestión de tramites. Digitalización y mantenimiento de documentos digitales.";
}

**/

let element3 = document.getElement3ById("myBtn3");
element3.addEventListener("click", function() {
  document.getElement3ById("demo3").innerHTML = "Confección de documentación. Entrega de legajos y gestión de tramites. Digitalización y mantenimiento de documentos digitales.";
});