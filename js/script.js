// Função para animar os contadores
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      counter.innerText = '0';
      const updateCounter = () => {
        const target = +counter.getAttribute('data-count');
        let count = +counter.innerText;
  
        // Incremento
        const increment = target / 50;
  
        if (count < target) {
          count += increment;
          counter.innerText = '+' + Math.ceil(count);
          setTimeout(updateCounter, 50);
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
  
