const corpo_Html = document.querySelector("html");
const botao_iluminacao = document.getElementById("botao-iluminacao");

botao_iluminacao.addEventListener("click", () => {
  console.log("Tic");
  corpo_Html.classList.toggle("darkMode-LightMode");
});
