function logar(){
    var login = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    var errorMessage = document.getElementById('error-message');

    if (login == 'admin' && senha == 'admin') {
        location.href = '../PaginaPrincipal/index.html'
    } else {
        errorMessage.classList.add('active', 'shake');
        setTimeout(() => {
            errorMessage.classList.remove('shake');
        }, 500);
    }
}

const errorMessage = document.getElementById('error-message');

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio do formulário para teste
    
    // Exibe a mensagem de erro
    errorMessage.classList.add('active', 'shake');

    // Remove a animação de shake após um tempo
    setTimeout(() => {
        errorMessage.classList.remove('shake');
    }, 500);
});