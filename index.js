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

// Boton con info //

const buttons = document.querySelectorAll('.expbutton');
const textElements = document.querySelectorAll('.hideText');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const textElement = textElements[index];
    textElement.classList.toggle('showText');
  });
});

  function toggleText() {
    hideText.classList.contains('show'); 
  
    if(hideText.classList.contains('show')) {
      hideText_btn.innerHTML = '→Ver experiencia←';
    }
  
    else {
    hideText_btn.innerHTML = 'Ocultar';
    }
  };