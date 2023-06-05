const botao_AddVideo = document.getElementById("botao-add-video");

botao_AddVideo.onclick = function adicionarVideo() {

    // Obter os valores dos campos de entrada
    let titulo = document.getElementById("titulo").value;
    let banda = document.getElementById("banda").value;
    let url = document.getElementById("url").value;

    // Criar elementos para o novo vídeo
    let videoCard = document.createElement("div");
    videoCard.className = "video-card";

    let tituloElement = document.createElement("h3");
    tituloElement.textContent = titulo;

    let bandaElement = document.createElement("p");
    bandaElement.textContent = banda;

    let videoElement = document.createElement("iframe");
    videoElement.src = url;

    // Adicionar os elementos ao vídeo card
    videoCard.appendChild(tituloElement);
    videoCard.appendChild(bandaElement);
    videoCard.appendChild(videoElement);

    // Adicionar o vídeo card ao contêiner de vídeos
    let videosContainer = document.getElementById("videos-container");
    if(titulo == ""){
        alert("Insira o nome da música")
    }
    if(banda == ""){
        alert("Insira o nome da banda")
    }
    if(url != ''){
        videosContainer.appendChild(videoCard);
    }
    else{
        alert("Você não digitou uma URL")
    }
    

    // Limpar os campos de entrada após adicionar o vídeo
    document.getElementById("titulo").value = "";
    document.getElementById("banda").value = "";
    document.getElementById("url").value = "";
  }