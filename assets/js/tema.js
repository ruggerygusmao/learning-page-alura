function toggleDarkMode(isDarkMode) {
    const bodyElement = document.body;
    const cabecalhoIconeTema = document.getElementsByClassName("cabecalho__tema__icone");
    const light = cabecalhoIconeTema[0];
    const dark = cabecalhoIconeTema[1];
  
    light.classList.toggle("dark-mode", isDarkMode);
    dark.classList.toggle("light-mode", !isDarkMode);

    if (isDarkMode) {
        bodyElement.style.setProperty('--cor-primaria', '#ffffff'); 
        bodyElement.style.setProperty('--cor-secundaria', '#000'); 
        bodyElement.style.setProperty('--cor-terciaria', '#333333'); 
    } else {
        bodyElement.style.setProperty('--cor-primaria', '#1C2128'); 
        bodyElement.style.setProperty('--cor-secundaria', '#cdd9e5'); 
        bodyElement.style.setProperty('--cor-terciaria', '#cdd9e5'); 
    }
  }