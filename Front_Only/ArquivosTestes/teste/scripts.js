document.addEventListener('DOMContentLoaded', function() {
    const logoutButton = document.getElementById('logout-btn');
    
    logoutButton.addEventListener('click', function() {
        alert('Você saiu!');
        // Redirecionar ou realizar a ação de logout aqui
        window.location.href = 'login.html'; // Exemplo de redirecionamento
    });
});