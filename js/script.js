// Função para animar os contadores
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      counter.innerText = '0';
      const updateCounter = () => {
        const target = +counter.getAttribute('data-count');
        let count = +counter.innerText;
  
        // Incremento
        const increment = target / 200;
  
        if (count < target) {
          count += increment;
          counter.innerText = '+' + Math.ceil(count);
          setTimeout(updateCounter, 10);
        } else {
          counter.innerText = '+' + target;
        }
      };
      updateCounter();
    });
  }
  
  // Verifica se a seção está visível na tela
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
  
  // Executa a animação quando a seção aparece na tela
  let hasAnimated = false;
  window.addEventListener('scroll', () => {
    const statsSection = document.getElementById('estatisticas');
    if (!hasAnimated && isElementInViewport(statsSection)) {
      animateCounters();
      hasAnimated = true;
    }
  });
  


  document.addEventListener("DOMContentLoaded", function() {
    let lastScrollTop = 0;
    const header = document.getElementById("main-header");
  
    window.addEventListener("scroll", function() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      if (scrollTop > 100) { // Ajuste este valor conforme necessário
        if (scrollTop > lastScrollTop) {
          // Rolando para baixo - mostra o header
          header.classList.add("show");
        } else {
          // Rolando para cima - oculta o header
          header.classList.remove("show");
        }
      } else {
        // No topo da página - oculta o header
        header.classList.remove("show");
      }
  
      lastScrollTop = scrollTop;
    });
  });
  
  