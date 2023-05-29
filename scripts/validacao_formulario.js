// declarando variaveis
const formulario = document.getElementById("formulario-container");
const nome_Input = document.getElementById("nome");
const sobrenome_Input = document.getElementById("sobrenome");
const email_Input = document.getElementById("email");
const telefone_input = document.getElementById("telefone");
const politica_input = document.getElementById("politica_privacidade");

//resetando o compartamento padrao da pagina de formulários
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Enviou")
    verificaInputs();
    // validandoEnvio(primeiroNome, sobreNome, email, celular);
})

//criando funcoes 
function verificaInputs(){
    verificaNome();
    verificaSobrenome();
    verificaEmail();
    validaTelefone();
    validandoEnvioFormulario(nome_Input, sobrenome_Input, email_Input, telefone_input);
}

//funcao que verifica e valida o nome
function verificaNome(){
    const valor_nome = nome_Input.value.trim();

    if(valor_nome === ''){
        validaErro(nome_Input, "Preencha o campo de nome")
    }

    else if(valor_nome.match(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/) && valor_nome.length < 20){
        validaSucesso(nome_Input)
    }

    else if(valor_nome.length > 20){
        validaErro(nome_Input, "O máximo de letras é 20")
    }

    else{
        validaErro(nome_Input, "Digite apenas letras")
    }
}

function verificaSobrenome(){
    const valor_sobrenome = sobrenome_Input.value.trim();

    if(valor_sobrenome === ''){
        validaErro(sobrenome_Input, "Preencha o campo de sobrenome")
    }

    else if(valor_sobrenome.match(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/) && valor_sobrenome.length < 20){
        validaSucesso(sobrenome_Input)
    }

    else if(valor_sobrenome.length > 20){
        validaErro(sobrenome_Input, "O máximo de letras é 20")
    }

    else{
        validaErro(sobrenome_Input, "Digite apenas letras")
    }
}

function verificaEmail(){
    const valor_email = email_Input.value.trim();

    if(valor_email === ''){
        validaErro(email_Input, "Preencha o campo de E-mail")
    }

    else if(valor_email.match(/[@]/) && valor_email.match(/[.com]/){
        validaSucesso(email_Input);  
    }

    else{
            validaErro(email_Input, "Insira um e-mail válido")
        }
    }

function validaTelefone(){
    const valor_telefone = telefone_input.value.trim();

    if(valor_telefone === ''){
        validaErro(telefone_input, "Preencha o campo de telefone")
    }
    else{
        if(valor_telefone.match(/^[0-9]+$/) && valor_telefone.length == 11){
            validaSucesso(telefone_input);
        }

        else if(valor_telefone.match(/^[0-9]+$/) && valor_telefone.length < 11){
            validaErro(telefone_input, "Digite pelo menos 11 número")
        }

        else if(valor_telefone.match(/^[0-9]+$/) && valor_telefone.length > 11){
            validaErro(telefone_input, "Você digitou mais do que 11 números")
        }
        else{
            validaErro(telefone_input, "Digite apenas números")
        }
    }
}

//funcao para validar o erro
function validaErro(input, mensagem){
    const papai_Input = input.parentElement;
    papai_Input.classList.remove("sucesso")
    papai_Input.classList.add("erro");
    input.value = "";
    input.placeholder = mensagem;
    
}

//funcao para validar o input correto
function validaSucesso(input){
    const papai_Input = input.parentElement;
    papai_Input.classList.remove("erro")
    papai_Input.classList.add("sucesso")
}

function validandoEnvioFormulario(input1, input2, input3, input4){
    const papai_input1 = input1.parentElement;
    const papai_input2 = input2.parentElement;
    const papai_input3 = input3.parentElement;
    const papai_input4 = input4.parentElement;

    if(papai_input1.classList.contains("sucesso") && papai_input2.classList.contains("sucesso") && papai_input3.classList.contains("sucesso") && papai_input4.classList.contains("sucesso")){
        alert("Formulário enviado com sucesso!")
    }
}