document.addEventListener("DOMContentLoaded", function() {
    fetch('/header.html')
      .then(response => response.text())
      .then(data => {
        // Insere o header no placeholder
        document.getElementById('header-placeholder').innerHTML = data;
  
        // Inicializa o comportamento do header após ele ser inserido no DOM
        initHeaderBehavior();
      })
      .catch(error => console.error('Erro ao carregar o header:', error));
  });
  
  function initHeaderBehavior() {
    let lastScrollTop = 0;
    const header = document.getElementById("main-header");
  
    if (!header) {
      console.error('Elemento header não encontrado no DOM.');
      return;
    }
  
    window.addEventListener("scroll", function() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      if (scrollTop > 100) { // Ajuste este valor conforme necessário
        // Rolando para baixo - mostra o header
        header.classList.add("show");
      } else {
        // No topo da página ou rolando para cima - oculta o header
        header.classList.remove("show");
      }
  
      lastScrollTop = scrollTop;
    });
  }
  