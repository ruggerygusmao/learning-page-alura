function toggleDarkMode(isDarkMode) {
  const bodyElement = document.body;
  const cabecalhoIconeTema = document.getElementsByClassName(
    "cabecalho__tema__icone"
  );
  const light = cabecalhoIconeTema[0];
  const dark = cabecalhoIconeTema[1];

  // Atualiza a classe conforme o modo escuro
  light.classList.toggle("dark-mode", isDarkMode);
  dark.classList.toggle("light-mode", !isDarkMode);

  // Atualiza as variáveis de cor
  if (isDarkMode) {
    bodyElement.style.setProperty("--cor-primaria", "#f6f6f6");
    bodyElement.style.setProperty("--cor-secundaria", "#1C2128");
    bodyElement.style.setProperty("--cor-terciaria", "#008069");
  } else {
    bodyElement.style.setProperty("--cor-primaria", "#1C2128");
    bodyElement.style.setProperty("--cor-secundaria", "#cdd9e5");
    bodyElement.style.setProperty("--cor-terciaria", "#06CF9C");
  }

  // Armazena a preferência no localStorage
  localStorage.setItem("isDarkMode", isDarkMode);
}

// Verifica a preferência armazenada no localStorage ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
  const isDarkModeStored = localStorage.getItem("isDarkMode") === "true";
  toggleDarkMode(isDarkModeStored);
});
