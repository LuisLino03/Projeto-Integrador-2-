// Abrir o modal ao clicar no botão
document.getElementById("abrir-modal").onclick = function() {
    document.getElementById("modal").style.display = "block";
}

// Fechar o modal ao clicar no 'x'
document.getElementById("fechar-modal").onclick = function() {
    document.getElementById("modal").style.display = "none";
}

// Função para salvar as informações do formulário e exibir na tela principal
function salvarInformacoes() {
    // Obtém os valores do formulário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    // Validação simples para garantir que os campos não estejam vazios
    if (nome && email) {
        // Atualiza as informações na tela principal
        document.getElementById("nome-preenchido").innerText = nome;
        document.getElementById("email-preenchido").innerText = email;

        // Fecha o modal
        document.getElementById("modal").style.display = "none";

        // Limpa os campos do formulário
        document.getElementById("form-cadastro").reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

// Fechar o modal ao clicar fora dele
window.onclick = function(event) {
    if (event.target == document.getElementById("modal")) {
        document.getElementById("modal").style.display = "none";
    }
}