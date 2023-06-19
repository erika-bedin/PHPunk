const slides = document.querySelectorAll(".slide"); // Seleciona todos os elementos com a classe "slide"
const btns = document.querySelectorAll(".btn"); // Seleciona todos os elementos com a classe "btn"
let currentSlide = 1; // Variável que armazena o índice do slide atual

const manualNav = (manual) => {
  // Função responsável pela navegação manual ao clicar em um botão
  slides.forEach((slide) => slide.classList.remove("active")); // Remove a classe "active" de todos os slides
  btns.forEach((btn) => btn.classList.remove("active")); // Remove a classe "active" de todos os botões

  slides[manual].classList.add("active"); // Adiciona a classe "active" ao slide selecionado manualmente
  btns[manual].classList.add("active"); // Adiciona a classe "active" ao botão correspondente ao slide selecionado manualmente

  currentSlide = manual; // Atualiza o índice do slide atual para o selecionado manualmente
};

btns.forEach((btn, i) => {
  // Adiciona um ouvinte de evento de clique para cada botão
  btn.addEventListener("click", () => {
    manualNav(i); // Chama a função manualNav passando o índice do botão clicado como argumento
  });
});

const repeat = () => {
  // Função responsável por repetir a navegação automática dos slides
  const repeater = () => {
    setTimeout(() => {
      slides.forEach((slide) => slide.classList.remove("active")); // Remove a classe "active" de todos os slides
      btns.forEach((btn) => btn.classList.remove("active")); // Remove a classe "active" de todos os botões

      currentSlide = (currentSlide + 1) % slides.length; // Atualiza o índice do slide atual para o próximo slide

      slides[currentSlide].classList.add("active"); // Adiciona a classe "active" ao próximo slide
      btns[currentSlide].classList.add("active"); // Adiciona a classe "active" ao botão correspondente ao próximo slide

      repeater(); // Chama a função repeater novamente para repetir o ciclo de navegação automática
    }, 7000); // Aguarda 7000 milissegundos (7 segundos) antes de avançar para o próximo slide
  };
  repeater(); // Chama a função repeater pela primeira vez para iniciar a navegação automática
};
repeat(); // Chama a função repeat para iniciar o carrossel de slides
