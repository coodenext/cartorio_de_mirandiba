// Função para rolagem suave ao clicar em links internos
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links que começam com #
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Função para validação do formulário de contato
    const formContato = document.querySelector('#form-contato');
    if (formContato) {
        formContato.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtém os valores dos campos
            const nome = document.querySelector('#nome').value.trim();
            const email = document.querySelector('#email').value.trim();
            const telefone = document.querySelector('#telefone').value.trim();
            const mensagem = document.querySelector('#mensagem').value.trim();
            
            // Validação básica
            if (!nome || !email || !mensagem) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }
            
            // Validação de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, insira um email válido.');
                return;
            }
            
            // Aqui você pode adicionar o código para enviar o formulário
            // Por exemplo, usando fetch para enviar para um servidor
            console.log('Formulário enviado:', { nome, email, telefone, mensagem });
            alert('Mensagem enviada com sucesso!');
            formContato.reset();
        });
    }

    // Função para menu responsivo
    const menuButton = document.querySelector('.menu-button');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuButton && navLinks) {
        menuButton.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
});

// Função para mostrar/ocultar botão de voltar ao topo
window.addEventListener('scroll', function() {
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    }
}); 