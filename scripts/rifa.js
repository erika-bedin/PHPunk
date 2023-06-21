    let selectedNumbers = [];
    

    // Função para adicionar ou remover um número selecionado
    function toggleSelectedNumber(number) {
      let index = selectedNumbers.indexOf(number);
      if (index > -1) {
        selectedNumbers.splice(index, 1);
      } else {
        if (selectedNumbers.length < 5) {
          selectedNumbers.push(number);
        }
      }
      updateSelectedNumbers();
    }

    // Função para atualizar a exibição dos números selecionados
    function updateSelectedNumbers() {
      let selectedNumbersContainer = document.getElementById('selected-numbers');
      selectedNumbersContainer.innerHTML = '';

      for (let i = 0; i < selectedNumbers.length; i++){
        let selectedNumber = document.createElement('span');
        if(selectedNumbers.length <= 5){
            selectedNumber.classList.add('selected-number');
            selectedNumber.textContent = selectedNumbers[i];
            selectedNumbersContainer.appendChild(selectedNumber);
        }
        
        
      }
    }

    // Adiciona um evento de clique para alternar a seleção de um número
    let numbers = document.getElementsByClassName('number');
    for (let i = 0; i < numbers.length; i++) {
      let number = numbers[i];
      number.addEventListener('click', function() {
        let selectedNumber = parseInt(this.textContent);
        if (selectedNumbers.length < 5 || this.classList.contains('selected')){
        toggleSelectedNumber(selectedNumber);
        this.classList.toggle('selected');
        }
      });
    }


    // Sortear um número e verificar se o usuário ganhou
    document.getElementById('draw-button').addEventListener('click', function() {
      let drawnNumber = Math.floor(Math.random() * maxNumber) + 1;
      let resultText = document.getElementById('result-text');
      let drawnNumberElement = document.getElementById('drawn-number');

      if (selectedNumbers.includes(drawnNumber)) {
        resultText.textContent = 'Você venceu!';
      } else {
        resultText.textContent = 'Você não venceu.';
      }

      drawnNumberElement.textContent = 'Número sorteado: ' + drawnNumber;

      showPopup();
    });

    // Função para exibir o popup
    function showPopup() {
      let popup = document.getElementById('result');
      popup.style.display = 'flex';
    }

    // Função para fechar o popup
    function closePopup() {
      let popup = document.getElementById('result');
      popup.style.display = 'none';
    }
