// Seleciona os elementos de entrada (input) e os elementos para exibição de mensagens (p)
const primeiroNomeInput = document.querySelector("#PrimeiroNome");
const primeiroNomeMensagem = document.querySelector("#nome1");

const ultimoNomeInput = document.querySelector("#UltimoNome");
const ultimoNomeMensagem = document.querySelector("#nome2");

const emailInput = document.querySelector("#email");
const emailMensagem = document.querySelector("#p3");

const radioMensagem = document.querySelector("#p4");
const mensagemTextarea = document.querySelector(".area");
const mensagemMensagem = document.querySelector("#p5");

const termosEServicosCheckbox = document.querySelectorAll('input[type="checkbox"]');
const termosMensagem = document.querySelector("#p6");

const sucesso = document.querySelector(".mensagem-sucesso");

const submitButton = document.querySelector("button");

// Adiciona o evento de clique ao botão de envio
submitButton.addEventListener("click", validarFormulario);

// Função para validar o formulário
function validarFormulario() {

    const primeiroNome = primeiroNomeInput.value.trim();
    const ultimoNome = ultimoNomeInput.value.trim();
    const email = emailInput.value.trim();
    const mensagem = mensagemTextarea.value.trim();

    let formularioValido = true;

    // Verifica o comprimento do primeiro nome
    if (primeiroNome.length < 3) {
        primeiroNomeMensagem.textContent = "Seu nome está com poucas caracteres";
        primeiroNomeMensagem.style.color = "red";
        formularioValido = false;
    } else {
        primeiroNomeMensagem.textContent = "";
    }

    // Verifica o comprimento do último nome
    if (ultimoNome.length < 3) {
        ultimoNomeMensagem.textContent = "Seu Sobrenome está com poucas caracteres";
        ultimoNomeMensagem.style.color = "red";
        formularioValido = false;
    } else {
        ultimoNomeMensagem.textContent = "";
    }

    // Verifica o comprimento do email
    if (email.length > 100) {
        emailMensagem.textContent = "Seu email é muito grande";
        emailMensagem.style.color = "red";
        formularioValido = false;
    } else {
        emailMensagem.textContent = "";
    }

    // Verifica o comprimento da mensagem
    if (mensagem.length > 500) {
        mensagemMensagem.textContent = "Você ultrapassou o limite de caracteres";
        mensagemMensagem.style.color = "red";
        formularioValido = false;
    } else {
        mensagemMensagem.textContent = "";
    }

    // Verifica se uma opção de rádio foi selecionada
    const radios = document.getElementsByName('opcoes');
    let radioSelecionado = false;

    radios.forEach((radio) => {
        if (radio.checked) {
            radioSelecionado = true;
        }
    });

    if (!radioSelecionado) {
        radioMensagem.textContent = "Você não selecionou uma opção de rádio";
        radioMensagem.style.color = "red";
        formularioValido = false;
    } else {
        radioMensagem.textContent = "";
    }

    // Verifica se os termos e serviços foram aceitos
    let termoSelecionado = false;

    termosEServicosCheckbox.forEach((checkbox) => {
        if (checkbox.checked) {
            termoSelecionado = true;
        }
    });

    if (!termoSelecionado) {
        termosMensagem.textContent = "Você não selecionou os termos e serviços";
        termosMensagem.style.color = "red";
        formularioValido = false;
    } else {
        termosMensagem.textContent = "";
    }

    // Exibe uma mensagem de sucesso ou limpa os erros após um atraso
    if (formularioValido) {
        sucesso.classList.remove("none");

        setTimeout(() => {
            sucesso.classList.add("none");
        }, 3000);


    } else {
        setTimeout(() => {
            primeiroNomeMensagem.textContent = "";
            ultimoNomeMensagem.textContent = "";
            emailMensagem.textContent = "";
            radioMensagem.textContent = "";
            mensagemMensagem.textContent = "";
            termosMensagem.textContent = "";
            location.reload();
        }, 3000);
    }


}
